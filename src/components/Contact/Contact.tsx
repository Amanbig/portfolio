"use client";
import BlurText from "@/components/BlurText/BlurText";
import Squares from "@/components/Backgrounds/Squares/Squares";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 max-w-4xl mx-auto w-full">
      <div className="absolute inset-0 z-0 opacity-10">
        <Squares
          direction="diagonal"
          speed={0.2}
          squareSize={36}
          borderColor="rgba(255,255,255,0.1)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      <div className="relative z-10 px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
            <BlurText text="Get in touch" animateBy="words" delay={50} direction="top" />
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I&apos;m open to new opportunities and collaborations. Send me a message or
            say hi on GitHub.
          </p>
        </div>

        <form className="space-y-8 max-w-2xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                         focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20
                         transition-all duration-300 outline-none
                         group-hover:border-white/20"
                placeholder="Your name"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                         focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20
                         transition-all duration-300 outline-none
                         group-hover:border-white/20"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                       focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20
                       transition-all duration-300 outline-none
                       group-hover:border-white/20"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="group relative px-8 py-3 rounded-lg font-medium transition-all duration-300
                       overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600
                       hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Send Message</span>
            </button>
            <div className="flex gap-6">
              <a
                href="mailto:hello@amanbig.dev"
                className="text-sm text-slate-300 hover:text-white flex items-center gap-2 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@amanbig.dev
              </a>
              <a
                href="https://github.com/Amanbig"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-slate-300 hover:text-white flex items-center gap-2 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
