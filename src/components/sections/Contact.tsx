import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LINKEDIN_URL } from "@/lib/content";

// Wire this up to a real backend before launch — e.g. a Formspree form ID,
// or a Cloudflare Worker/Pages Function route. Leave unset and the form
// falls back to opening the visitor's email client with the message
// pre-filled, so it stays functional either way.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
const FALLBACK_EMAIL = "hello@northal.org";

const INTEREST_OPTIONS = [
  "Reporting & dashboards",
  "Systems of record (LegalServer, CRM, case management)",
  "AI & workflow automation",
  "One-off analysis or evaluation",
  "Not sure yet — let's talk",
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!FORM_ENDPOINT) {
      const subject = `New inquiry from ${data.get("name") || "your site"}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Organization: ${data.get("organization") || "—"}`,
        `What's this about: ${data.get("interest")}`,
        "",
        String(data.get("message") ?? ""),
      ].join("\n");
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={{ padding: "0 0 98px" }}>
      <hr
        className="m-0 mb-11 border-0"
        style={{
          height: 5,
          borderTop: "2px solid var(--color-text)",
          borderBottom: "1px solid var(--color-text)",
        }}
      />
      <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-x-[clamp(24px,5vw,96px)] gap-y-11 max-[720px]:grid-cols-1">
        <div>
          <h2 className="m-0 text-4xl leading-[42px] tracking-[-0.015em]">
            Tell me what's not working
          </h2>
          <p
            className="mt-7 text-[15.5px] leading-7"
            style={{
              maxWidth: "44ch",
              color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
            }}
          >
            A paragraph is plenty. What you're working with, what's breaking, and who's waiting on
            the answer. I read and reply to everything myself, usually within two business days.
          </p>
          <p className="mt-7 text-[15.5px] leading-7">
            Prefer email? <a href={`mailto:${FALLBACK_EMAIL}`}>{FALLBACK_EMAIL}</a>
            <br />
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          <div>
            <Label htmlFor="rl-name">Your name</Label>
            <Input id="rl-name" name="name" required autoComplete="name" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="rl-email">Email</Label>
            <Input
              id="rl-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="rl-org">Organization</Label>
            <Input id="rl-org" name="organization" autoComplete="organization" className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="rl-interest">What's this about?</Label>
            <select
              id="rl-interest"
              name="interest"
              defaultValue={INTEREST_OPTIONS[0]}
              className="mt-1.5 flex h-11 w-full rounded-[var(--radius-md)] border border-input bg-[color:var(--color-surface)] px-3 text-sm text-[color:var(--color-text)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {INTEREST_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <Label htmlFor="rl-message">What's not working</Label>
            <Textarea
              id="rl-message"
              name="message"
              required
              rows={5}
              className="mt-1.5"
              style={{ minHeight: 120 }}
            />
          </div>

          <div style={{ gridColumn: "1/-1" }} className="flex flex-wrap items-center gap-[15px]">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send it over"}
            </button>
            <span
              className="text-[13px]"
              style={{ color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}
            >
              No newsletter, no CRM sequence. Just a reply from me.
            </span>
          </div>
          {status === "success" && (
            <p
              role="status"
              className="text-sm"
              style={{
                gridColumn: "1/-1",
                color: "color-mix(in srgb, var(--color-text) 75%, transparent)",
              }}
            >
              Thanks — I'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              className="text-sm text-[color:var(--destructive)]"
              style={{ gridColumn: "1/-1" }}
            >
              Something went wrong sending that. Email me directly at{" "}
              <a href={`mailto:${FALLBACK_EMAIL}`} className="underline">
                {FALLBACK_EMAIL}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
