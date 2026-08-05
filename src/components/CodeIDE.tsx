import { useCallback, useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Download, Play, Save, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/auth";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type Language = "javascript" | "html" | "python";

const LANGUAGE_DEFAULTS: Record<Language, string> = {
  javascript: `// Welcome to the Northal IDE
// Press Run to execute your code

console.log("Hello, world!");
`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Page</title>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>
`,
  python: `# Python runs client-side via download — write your code here
# and use the Download button to save it as a .py file

print("Hello, world!")
`,
};

const EXTENSIONS: Record<Language, string> = {
  javascript: "js",
  html: "html",
  python: "py",
};

interface ConsoleEntry {
  type: "log" | "error" | "warn";
  text: string;
}

interface CodeIDEProps {
  projectId?: string;
  initialTitle?: string;
  initialLanguage?: Language;
  initialCode?: string;
  onSaved?: (projectId: string) => void;
  onRequestSignIn?: () => void;
}

export function CodeIDE({
  projectId: initialProjectId,
  initialTitle = "Untitled project",
  initialLanguage = "javascript",
  initialCode,
  onSaved,
  onRequestSignIn,
}: CodeIDEProps) {
  const { user } = useAuth();
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [code, setCode] = useState(initialCode ?? LANGUAGE_DEFAULTS[initialLanguage]);
  const [title, setTitle] = useState(initialTitle);
  const [projectId, setProjectId] = useState<string | undefined>(initialProjectId);
  const [output, setOutput] = useState<ConsoleEntry[]>([]);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Update code when language changes (only if using a default)
  function handleLanguageChange(lang: Language) {
    setLanguage(lang);
    if (!initialCode) setCode(LANGUAGE_DEFAULTS[lang]);
  }

  // Listen for console messages from the sandboxed iframe
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.source !== "northal-ide") return;
      setOutput((prev) => [
        ...prev,
        { type: e.data.type ?? "log", text: String(e.data.text) },
      ]);
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleRun = useCallback(() => {
    setOutput([]);
    if (!iframeRef.current) return;

    if (language === "html") {
      iframeRef.current.srcdoc = code;
      return;
    }

    if (language === "javascript") {
      const intercept = `
        const _send = (type, ...args) => {
          window.parent.postMessage({ source: "northal-ide", type, text: args.join(" ") }, "*");
        };
        const console = {
          log: (...a) => _send("log", ...a),
          error: (...a) => _send("error", ...a),
          warn: (...a) => _send("warn", ...a),
        };
        try { ${code} } catch(e) { _send("error", e.toString()); }
      `;
      iframeRef.current.srcdoc = `<script>${intercept}<\/script>`;
      return;
    }

    // Python: can't run client-side, show a message
    setOutput([{ type: "warn", text: "Python execution isn't available in the browser yet. Use Download to save your file and run it locally." }]);
  }, [language, code]);

  function handleDownload() {
    const ext = EXTENSIONS[language];
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "-").toLowerCase()}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleSave() {
    if (!user) {
      onRequestSignIn?.();
      return;
    }
    setSaving(true);
    setSaveMsg(null);
    try {
      const payload = {
        title,
        language,
        code,
        updatedAt: serverTimestamp(),
      };
      if (projectId) {
        await setDoc(doc(db, "users", user.uid, "ideProjects", projectId), payload, {
          merge: true,
        });
        onSaved?.(projectId);
      } else {
        const ref = await addDoc(
          collection(db, "users", user.uid, "ideProjects"),
          { ...payload, createdAt: serverTimestamp() },
        );
        setProjectId(ref.id);
        onSaved?.(ref.id);
      }
      setSaveMsg("Saved!");
      setTimeout(() => setSaveMsg(null), 2000);
    } catch {
      setSaveMsg("Save failed — please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-col h-full min-h-0 bg-[color:var(--paper)]">
      {/* Toolbar */}
      <div className="flex items-center gap-2 border-b border-[color:var(--forest)]/10 px-3 py-2 flex-wrap">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[color:var(--forest)] placeholder:text-[color:var(--forest)]/40 focus:outline-none"
          aria-label="Project title"
          placeholder="Untitled project"
        />
        <div className="flex items-center gap-2 shrink-0">
          <Select value={language} onValueChange={(v) => handleLanguageChange(v as Language)}>
            <SelectTrigger className="h-8 w-36 text-xs">
              <SelectValue />
              <ChevronDown className="h-3 w-3 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="html">HTML / CSS</SelectItem>
              <SelectItem value="python">Python</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" variant="ghost" onClick={handleRun} className="h-8 gap-1 text-xs">
            <Play className="h-3.5 w-3.5" />
            Run
          </Button>
          <Button size="sm" variant="ghost" onClick={handleDownload} className="h-8 gap-1 text-xs">
            <Download className="h-3.5 w-3.5" />
            Download
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleSave}
            disabled={saving}
            className="h-8 gap-1 text-xs"
            title={user ? "Save to account" : "Sign in to save"}
          >
            <Save className="h-3.5 w-3.5" />
            {saving ? "Saving…" : saveMsg ?? "Save"}
          </Button>
        </div>
      </div>

      {/* Editor + output split */}
      <div className="flex flex-1 min-h-0 flex-col sm:flex-row">
        <div className="flex-1 min-h-[300px]">
          <Editor
            language={language === "html" ? "html" : language === "python" ? "python" : "javascript"}
            value={code}
            onChange={(v) => setCode(v ?? "")}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 13,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              wordWrap: "on",
              padding: { top: 12 },
            }}
          />
        </div>

        {/* Output panel */}
        <div className="sm:w-72 border-t sm:border-t-0 sm:border-l border-[color:var(--forest)]/10 bg-[color:var(--paper-deep)] flex flex-col min-h-[120px]">
          <div className="border-b border-[color:var(--forest)]/10 px-3 py-1.5 text-xs uppercase tracking-widest text-[color:var(--forest)]/50">
            Output
          </div>
          {language === "html" ? (
            <iframe
              ref={iframeRef}
              sandbox="allow-scripts"
              className="flex-1 min-h-0 w-full bg-white"
              title="HTML preview"
            />
          ) : (
            <div className="flex-1 min-h-0 overflow-auto p-3 font-mono text-xs space-y-1">
              {output.length === 0 ? (
                <span className="text-[color:var(--forest)]/30">Press Run to see output.</span>
              ) : (
                output.map((entry, i) => (
                  <div
                    key={i}
                    className={
                      entry.type === "error"
                        ? "text-red-400"
                        : entry.type === "warn"
                          ? "text-yellow-400"
                          : "text-[color:var(--forest)]"
                    }
                  >
                    {entry.text}
                  </div>
                ))
              )}
              {/* Hidden iframe for JS execution */}
              <iframe
                ref={iframeRef}
                sandbox="allow-scripts"
                className="hidden"
                title="JS sandbox"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
