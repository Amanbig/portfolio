"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/mrbzpvel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const socialLinks = [
    {
      icon: "⬡",
      label: "github",
      value: "github.com/Amanbig",
      href: "https://github.com/Amanbig",
      color: "text-[#c9d1d9] hover:text-white",
    },
    {
      icon: "◈",
      label: "linkedin",
      value: "linkedin.com/in/amanpreet-singh-9a1929211",
      href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: "✉",
      label: "email",
      value: "amanpreetsinghjhiwant@gmail.com",
      href: "mailto:amanpreetsinghjhiwant7@gmail.com",
      color: "text-green-400 hover:text-green-300",
    },
    {
      icon: "◉",
      label: "discord",
      value: "phibi2662",
      href: "#",
      color: "text-purple-400 hover:text-purple-300",
    },
  ];

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        <div className="bg-[#161b22] px-4 py-2.5 border-b border-[#30363d] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="text-[#8b949e] text-xs ml-2">contact_me.sh</span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left panel — social links */}
          <div className="md:w-60 border-b md:border-b-0 md:border-r border-[#30363d] p-6 space-y-4">
            <div className="text-[#8b949e] text-xs mb-4">
              <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> cat contacts.json
            </div>

            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex flex-col gap-0.5 group ${link.color} transition-colors`}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#8b949e] group-hover:text-current transition-colors">{link.icon}</span>
                    <span className="text-[#8b949e] group-hover:text-current transition-colors">{link.label}:</span>
                  </div>
                  <div className="text-[10px] pl-4 break-all leading-tight">{link.value}</div>
                </motion.a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#30363d]">
              <a href="/resume/Amanpreet_s_Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="text-xs text-[#8b949e] hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-yellow-400 group-hover:animate-float inline-block">↓</span>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right panel — form */}
          <div className="flex-1 p-6 md:p-8">
            <div className="mb-6 text-[#c9d1d9] text-sm">
              <span className="text-green-400">➜</span> <span className="text-blue-400">~</span>{" "}
              <span className="text-[#c9d1d9]">./contact_me.sh</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Enter Name:", name: "name", type: "text", value: formData.name },
                { label: "Enter Email:", name: "email", type: "email", value: formData.email },
              ].map(({ label, name, type, value }) => (
                <div key={name}>
                  <label className="block text-[#8b949e] text-xs mb-1 tracking-wide">{label}</label>
                  <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded focus-within:border-blue-400/60 transition-colors">
                    <span className="text-green-400 px-3 select-none">➜</span>
                    <input
                      type={type}
                      name={name}
                      value={value}
                      onChange={handleChange}
                      className="w-full bg-transparent text-[#c9d1d9] focus:outline-none py-2.5 pr-3 text-sm"
                      placeholder="_"
                      required
                    />
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-[#8b949e] text-xs mb-1 tracking-wide">Enter Message:</label>
                <div className="flex items-start bg-[#161b22] border border-[#30363d] rounded focus-within:border-blue-400/60 transition-colors">
                  <span className="text-green-400 px-3 pt-2.5 select-none">➜</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent text-[#c9d1d9] focus:outline-none py-2.5 pr-3 min-h-[110px] resize-none text-sm"
                    placeholder="_"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center gap-2 bg-[#238636] text-white px-5 py-2 rounded text-sm font-bold hover:bg-[#2ea043] transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border border-[#238636]/60 hover:border-[#2ea043]/60"
                >
                  {status === 'sending' ? (
                    <><span className="animate-spin">⟳</span> Executing...</>
                  ) : (
                    <><span className="text-green-300">▶</span> ./submit.sh</>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-green-400 flex items-center gap-1 text-sm"
                  >
                    <span>✔</span> Message sent!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-400 flex items-center gap-1 text-sm"
                  >
                    <span>✘</span> Failed to send.
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
