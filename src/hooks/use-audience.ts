import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { AudienceBand } from "@/lib/tracks";

export const AUDIENCE_KEY = "northal-audience";

export function useAudience() {
  const navigate = useNavigate();
  const [audience, setAudience] = useState<AudienceBand | null>(null);
  const [audienceLoaded, setAudienceLoaded] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(AUDIENCE_KEY);
    if (saved === "teen") setAudience("teen");
    else if (saved === "college") setAudience("college");
    setAudienceLoaded(true);
  }, []);

  function clearAudience() {
    window.localStorage.removeItem(AUDIENCE_KEY);
    void navigate({ to: "/" });
  }

  return { audience, audienceLoaded, clearAudience };
}
