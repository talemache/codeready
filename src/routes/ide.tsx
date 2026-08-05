import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CodeIDE } from "@/components/CodeIDE";
import { AuthModal } from "@/components/AuthModal";
import { useAuth } from "@/lib/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ideSearchSchema = z.object({
  projectId: z.string().optional(),
});

export const Route = createFileRoute("/ide")({
  validateSearch: ideSearchSchema,
  head: () => ({
    meta: [
      { title: "Code IDE — Northal" },
      { name: "description", content: "Write, run, and save code in your browser — no setup required." },
    ],
  }),
  component: IDEPage,
});

function IDEPage() {
  const { user } = useAuth();
  const { projectId } = Route.useSearch();
  const [authOpen, setAuthOpen] = useState(false);

  type ProjectData = { title: string; language: string; code: string } | null;
  const [project, setProject] = useState<ProjectData>(null);
  const [loadingProject, setLoadingProject] = useState(!!projectId);

  useEffect(() => {
    if (!projectId || !user) { setLoadingProject(false); return; }
    getDoc(doc(db, "users", user.uid, "ideProjects", projectId)).then((snap) => {
      if (snap.exists()) {
        const d = snap.data();
        setProject({ title: d.title, language: d.language, code: d.code });
      }
      setLoadingProject(false);
    }).catch(() => setLoadingProject(false));
  }, [projectId, user]);

  return (
    <div className="flex min-h-screen flex-col bg-[color:var(--paper)]">
      <SiteHeader />
      <main id="main-content" className="flex flex-1 flex-col min-h-0" tabIndex={-1}>
        {!user && (
          <div className="border-b border-[color:var(--forest)]/10 bg-[color:var(--paper-deep)] px-5 py-2 text-xs text-[color:var(--forest)]/70 flex items-center justify-between gap-3">
            <span>Sign in to save your projects across devices.</span>
            <button
              onClick={() => setAuthOpen(true)}
              className="underline hover:text-[color:var(--forest)] transition"
            >
              Sign in or create a free account
            </button>
          </div>
        )}
        <div className="flex-1 min-h-0" style={{ height: "calc(100vh - 120px)" }}>
          {!loadingProject && (
            <CodeIDE
              projectId={projectId}
              initialTitle={project?.title}
              initialLanguage={project?.language as "javascript" | "html" | "python" | undefined}
              initialCode={project?.code}
              onRequestSignIn={() => setAuthOpen(true)}
            />
          )}
        </div>
      </main>
      <SiteFooter />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
    </div>
  );
}
