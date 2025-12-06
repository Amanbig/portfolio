"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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
        headers: {
          'Content-Type': 'application/json',
        },
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

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto w-full px-4 font-mono">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-xl">
        <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="text-[#8b949e] text-xs ml-2">contact_me.sh</span>
        </div>

        <div className="p-6 md:p-10">
          <div className="mb-6 text-[#c9d1d9]">
            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> ./contact_me.sh
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#8b949e] text-sm mb-1">Enter Name:</label>
              <div className="flex items-center bg-[#0d1117] border-b border-[#30363d] focus-within:border-blue-400 transition-colors">
                <span className="text-green-400 mr-2">➜</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent text-[#c9d1d9] focus:outline-none py-2"
                  placeholder="_"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8b949e] text-sm mb-1">Enter Email:</label>
              <div className="flex items-center bg-[#0d1117] border-b border-[#30363d] focus-within:border-blue-400 transition-colors">
                <span className="text-green-400 mr-2">➜</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-[#c9d1d9] focus:outline-none py-2"
                  placeholder="_"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8b949e] text-sm mb-1">Enter Message:</label>
              <div className="flex items-start bg-[#0d1117] border-b border-[#30363d] focus-within:border-blue-400 transition-colors">
                <span className="text-green-400 mr-2 mt-2">➜</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent text-[#c9d1d9] focus:outline-none py-2 min-h-[100px] resize-none"
                  placeholder="_"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#238636] text-white px-6 py-2 rounded text-sm font-bold hover:bg-[#2ea043] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span className="animate-spin">⟳</span> Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </button>

              {status === 'success' && (
                <div className="mt-4 text-green-400 flex items-center gap-2">
                  <span className="text-blue-400">✔</span> Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 text-red-400 flex items-center gap-2">
                  <span className="text-red-400">✘</span> Failed to send message.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
