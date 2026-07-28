import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { AudienceBand } from "@/lib/tracks";

const AUDIENCE_KEY = "codeready-audience";

export function useAudience() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState<AudienceBand | null>(null);
  const [audienceLoaded, setAudienceLoaded] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(AUDIENCE_KEY);
    if (saved === "teen" || saved === "college") setAudience(saved as AudienceBand);
    setAudienceLoaded(true);
  }, []);

  function clearAudience() {
    window.localStorage.removeItem(AUDIENCE_KEY);
    void navigate({ to: "/" });
  }

  return { audience, audienceLoaded, clearAudience };
}
