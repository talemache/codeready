import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[color:var(--forest)]/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-[color:var(--forest)]/70">
        <p>Northal — free forever. Built for curious learners who want to make real projects.</p>
        <nav className="flex items-center gap-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </footer>
  );
}
