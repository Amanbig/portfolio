"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  {
    label: "GitHub",
    value: "github.com/Amanbig",
    href: "https://github.com/Amanbig",
  },
  {
    label: "LinkedIn",
    value: "amanpreet-singh-9a1929211",
    href: "https://www.linkedin.com/in/amanpreet-singh-9a1929211",
  },
  {
    label: "Email",
    value: "amanpreetsinghjhiwant@gmail.com",
    href: "mailto:amanpreetsinghjhiwant7@gmail.com",
  },
  {
    label: "Discord",
    value: "phibi2662",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <section id="contact" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-primary text-sm font-mono uppercase tracking-widest mb-2">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get In Touch</h2>
        <p className="text-muted-foreground mt-3 text-sm max-w-lg">
          Have a project in mind or just want to chat? I&apos;m always open to new opportunities and
          conversations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2"
        >
          <Card className="border-border h-full">
            <CardContent className="pt-5 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
                <div className="space-y-4">
                  {socialLinks.map(({ label, value, href }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={href !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex flex-col gap-0.5 group"
                    >
                      <span className="text-xs font-medium text-muted-foreground">{label}</span>
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">
                        {value}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <Separator />

              <a
                href="/resume/Amanpreet_s_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-primary group-hover:animate-float inline-block">↓</span>
                Download Resume
              </a>
            </CardContent>
          </Card>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-3"
        >
          <Card className="border-border">
            <CardContent className="pt-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-border focus-visible:ring-primary/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border focus-visible:ring-primary/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    required
                    rows={5}
                    className="bg-background border-border focus-visible:ring-primary/50 resize-none"
                  />
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <Button type="submit" disabled={status === "sending"} className="flex-1 sm:flex-none">
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>

                  {status === "success" && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-green-400 flex items-center gap-1.5"
                    >
                      <span>✓</span> Sent!
                    </motion.span>
                  )}
                  {status === "error" && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-destructive"
                    >
                      Something went wrong.
                    </motion.span>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
