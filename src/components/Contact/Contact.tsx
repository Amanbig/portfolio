"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
        <p className="text-slate-300 mb-6">
          I&apos;m open to new opportunities and collaborations. Send me a message or
          say hi on GitHub.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:hello@amanbig.dev"
            className="px-5 py-2 bg-white/6 rounded-md hover:bg-white/8"
          >
            Email me
          </a>

          <a
            href="https://github.com/Amanbig"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border rounded-md border-white/6"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
