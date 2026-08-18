import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES } from "@/lib/content";

// Wire this up to a real backend before launch — e.g. a Formspree form ID,
// or a Cloudflare Worker/Pages Function route. Leave unset and the form
// falls back to opening the visitor's email client with the message
// pre-filled, so it stays functional either way.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
const FALLBACK_EMAIL = "hello@northal.org";

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
        `Area of interest: ${data.get("interest")}`,
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
    <section id="contact" className="border-t border-[color:var(--navy)]/10 bg-[color:var(--cream-deep)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight">Start a conversation</h2>
            <p className="mt-5 text-[color:var(--navy)]/72 leading-relaxed">
              Tell me what you're working with and what's not working. I respond to every inquiry
              personally, usually within a couple of business days.
            </p>
            <p className="mt-4 text-sm text-[color:var(--navy)]/55">
              Or email directly:{" "}
              <a href={`mailto:${FALLBACK_EMAIL}`} className="text-[color:var(--copper-deep)] font-medium hover:underline">
                {FALLBACK_EMAIL}
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required autoComplete="name" className="mt-1.5" />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1.5"
              />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                name="organization"
                autoComplete="organization"
                className="mt-1.5"
              />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="interest">Area of interest</Label>
              <select
                id="interest"
                name="interest"
                defaultValue={SERVICES[0].id}
                className="mt-1.5 flex h-11 w-full border border-input bg-[color:var(--card)] px-3 text-sm text-[color:var(--navy)] shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} className="mt-1.5" />
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-accent disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
              {status === "success" && (
                <p role="status" className="text-sm text-[color:var(--navy)]/75">
                  Thanks — I'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm text-[color:var(--destructive)]">
                  Something went wrong. Email me directly at{" "}
                  <a href={`mailto:${FALLBACK_EMAIL}`} className="underline">
                    {FALLBACK_EMAIL}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
