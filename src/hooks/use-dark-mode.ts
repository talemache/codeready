import { useEffect, useState } from "react";

const STORAGE_KEY = "codeready-theme";
type Theme = "dark" | "light";

function isValidTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

function getInitialDark(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isValidTheme(stored)) return stored === "dark";
  // Invalid or missing value: fall back to system preference and clean up
  if (stored !== null) localStorage.removeItem(STORAGE_KEY);
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useDarkMode() {
  const [dark, setDark] = useState(false);

  // Hydrate from localStorage + system preference
  useEffect(() => {
    setDark(getInitialDark());
  }, []);

  // Apply class and persist
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(STORAGE_KEY, "light");
    }
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
