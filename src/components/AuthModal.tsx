import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth";
import { AccountInfoBubble } from "./AccountInfoBubble";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const { signUpWithEmail, signInWithEmail, signInWithGoogle } = useAuth();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (tab === "signup") {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? friendlyError(err.message) : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? friendlyError(err.message) : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl flex items-center gap-2">
            Save your progress
            <AccountInfoBubble />
          </DialogTitle>
        </DialogHeader>

        <Tabs value={tab} onValueChange={(v) => { setTab(v as "signin" | "signup"); setError(null); }}>
          <TabsList className="w-full">
            <TabsTrigger value="signin" className="flex-1">Log in</TabsTrigger>
            <TabsTrigger value="signup" className="flex-1">Sign up</TabsTrigger>
          </TabsList>

          {(["signin", "signup"] as const).map((t) => (
            <TabsContent key={t} value={t}>
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="auth-email">Email</Label>
                  <Input
                    id="auth-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="auth-password">Password</Label>
                  <Input
                    id="auth-password"
                    type="password"
                    autoComplete={t === "signup" ? "new-password" : "current-password"}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="text-sm text-[color:var(--coral)]" role="alert">{error}</p>
                )}
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Please wait…" : t === "signup" ? "Create account" : "Log in"}
                </Button>
              </form>
            </TabsContent>
          ))}
        </Tabs>

        <div className="relative my-1 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button
          variant="outline"
          disabled={loading}
          onClick={handleGoogle}
          className="w-full gap-2"
        >
          <GoogleIcon />
          Continue with Google
        </Button>

        <p className="mt-2 text-center text-xs text-muted-foreground">
          No login is required to use Northal — this only saves your progress across devices.
        </p>
      </DialogContent>
    </Dialog>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function friendlyError(msg: string): string {
  if (msg.includes("email-already-in-use")) return "An account with this email already exists.";
  if (msg.includes("wrong-password") || msg.includes("invalid-credential")) return "Incorrect email or password.";
  if (msg.includes("user-not-found")) return "No account found with this email.";
  if (msg.includes("weak-password")) return "Password must be at least 6 characters.";
  if (msg.includes("popup-closed")) return "Sign-in popup was closed. Please try again.";
  return "Something went wrong. Please try again.";
}
