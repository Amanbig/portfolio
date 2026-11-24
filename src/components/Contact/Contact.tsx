"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import SectionHeading from "@/components/SectionHeading";

const links = [
  { label: "Email", value: "amanpreetsinghjhiwant@gmail.com", href: "mailto:amanpreetsinghjhiwant7@gmail.com" },
  { label: "GitHub", value: "github.com/Amanbig", href: "https://github.com/Amanbig" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amanpreet-singh-9a1929211",
    href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211",
  },
];

const inputClass =
  "w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-accent transition-colors";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mrbzpvel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          command="./contact.sh"
          title="Let's work together"
          subtitle="Open to backend and full-stack roles, freelance work and open-source collaboration."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <ul className="space-y-6">
            {links.map((l) => (
              <li key={l.label}>
                <p className="font-mono text-xs text-zinc-500 mb-1">{l.label}</p>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-accent transition-colors break-all"
                >
                  {l.value}
                </a>
              </li>
            ))}
            <li>
              <p className="font-mono text-xs text-zinc-500 mb-1">Discord</p>
              <span className="text-zinc-200">phibi2662</span>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Your email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Your message" className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 rounded-md bg-accent text-zinc-950 font-semibold hover:brightness-110 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" className="text-sm min-h-5">
              {status === "success" && <span className="text-accent">Thanks! I&apos;ll get back to you soon.</span>}
              {status === "error" && <span className="text-red-400">Something went wrong. Please try again or email me directly.</span>}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
