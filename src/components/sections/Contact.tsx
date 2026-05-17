import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin, SendHorizontal, MessageCircle, Linkedin, Github, Youtube, Twitter, Facebook, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-full h-96 bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6">Connect</Badge>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8">
              Let's Build <br /> Something <span className="text-brand-blue">Powerful</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Whether you have a fully-formed idea or just a spark of a project, let's talk and make it real.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=contact2amit@zohomail.in&su=Project%20Inquiry%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Amit%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details%3A%0A-%20Type%3A%20%0A-%20Budget%3A%20%0A-%20Timeline%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-colors shrink-0"
                >
                  <Mail size={24} />
                </a>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email Me</p>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=contact2amit@zohomail.in&su=Project%20Inquiry%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Amit%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0AProject%20Details%3A%0A-%20Type%3A%20%0A-%20Budget%3A%20%0A-%20Timeline%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-bold text-white hover:text-brand-blue transition-colors"
                  >
                    contact2amit@zohomail.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <a
                  href="https://wa.me/919631116311?text=Hi%20Amit%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20software%20project.%20Could%20you%20please%20share%20your%20availability%20and%20a%20quote%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-green-500 group-hover:bg-green-500/10 transition-colors shrink-0"
                >
                  <MessageCircle size={24} />
                </a>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">WhatsApp / Phone</p>
                  <a
                    href="https://wa.me/919631116311?text=Hi%20Amit%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20software%20project.%20Could%20you%20please%20share%20your%20availability%20and%20a%20quote%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white hover:text-green-400 transition-colors"
                  >
                    +91 9631116311
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Tap to chat on WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-violet-400 group-hover:bg-violet-400/10 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-white">Gurgaon, India</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-6">
                {[
                  { href: "https://www.linkedin.com/in/amit-gupta-developer", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://github.com/AmitGupta1998",                  icon: Github,   label: "GitHub" },
                  { href: "https://www.youtube.com/@CodeWithCodeOfficial",     icon: Youtube,  label: "YouTube" },
                  { href: "https://x.com/AMIT5097",                            icon: Twitter,  label: "X" },
                  { href: "https://www.facebook.com/codewithcode",             icon: Facebook, label: "Facebook" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/10 hover:bg-brand-blue/10 hover:border-brand-blue/40 text-white transition-all">
                      <Icon size={18} />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden"
          >
            {/* Success overlay */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 rounded-[2.5rem] text-center p-10"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    className="rounded-full bg-brand-blue hover:bg-brand-blue/90 text-white px-8"
                  >
                    Send Another
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                  <Input name="from_name" required className="bg-white/5 border-white/10 rounded-xl py-6 text-white focus:border-brand-blue/50" placeholder="e.g. Rahul Sharma" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                  <Input name="from_email" type="email" required className="bg-white/5 border-white/10 rounded-xl py-6 text-white focus:border-brand-blue/50" placeholder="rahul@yourbusiness.in" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
                <Input name="subject" required className="bg-white/5 border-white/10 rounded-xl py-6 text-white focus:border-brand-blue/50" placeholder="e.g. Need AI Automation for My Business" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                <Textarea name="message" required className="bg-white/5 border-white/10 rounded-2xl min-h-[150px] text-white focus:border-brand-blue/50" placeholder="Hi Amit, I have an e-commerce business and I want to automate order management and customer follow-ups using AI. I also need a WhatsApp bot for quick replies. Can you please share the timeline and cost?" />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-3 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try WhatsApp or email directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                size="lg"
                className="w-full rounded-2xl bg-brand-blue hover:bg-brand-blue/90 py-8 text-lg font-bold group text-white shadow-xl shadow-brand-blue/20 transition-all disabled:opacity-70"
              >
                {status === "loading" ? (
                  <><Loader2 className="mr-2 animate-spin" size={20} /> Sending…</>
                ) : (
                  <>Send Message <SendHorizontal className="ml-2 group-hover:translate-x-1 transition-transform" /></>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
