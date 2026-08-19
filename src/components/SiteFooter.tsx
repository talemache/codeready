import { LINKEDIN_URL } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-14 text-[13px] leading-7 text-[color:var(--color-text)]/70">
      <hr className="m-0 mb-5 h-0 border-0 border-t border-[color:var(--color-text)]" />
      <div className="flex flex-wrap justify-between gap-x-[42px] gap-y-3.5">
        <span>&copy; {year} Ryan Levels.</span>
        <span>
          North Canton, Ohio · Remote-first · hello@northal.org ·{" "}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
