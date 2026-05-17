import React from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin, SendHorizontal, MessageCircle, Linkedin, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-black overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-full h-96 bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
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
                 <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
                   <Mail size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email Me</p>
                   <p className="text-xl font-bold text-white">amitgupta1998@yahoo.com</p>
                 </div>
               </div>

               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-green-500 group-hover:bg-green-500/10 transition-colors">
                   <MessageCircle size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">WhatsApp / Phone</p>
                   <p className="text-xl font-bold text-white">+91 9631116311</p>
                 </div>
               </div>

               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-violet-400 group-hover:bg-violet-400/10 transition-colors">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                   <p className="text-xl font-bold text-white">Gurgaon, India</p>
                 </div>
               </div>

               <div className="flex gap-4 pt-6">
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/10 hover:bg-brand-blue/10 text-white">
                    <Linkedin size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/10 hover:bg-brand-blue/10 text-white">
                    <Github size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/10 hover:bg-brand-blue/10 text-white">
                    <Send size={20} />
                  </Button>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Name</label>
                  <Input className="bg-white/5 border-white/10 rounded-xl py-6 text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Email</label>
                  <Input className="bg-white/5 border-white/10 rounded-xl py-6 text-white" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
                <Input className="bg-white/5 border-white/10 rounded-xl py-6 text-white" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                <Textarea className="bg-white/5 border-white/10 rounded-2xl min-h-[150px] text-white" placeholder="Tell me about your project..." />
              </div>
              <Button size="lg" className="w-full rounded-2xl bg-brand-blue hover:bg-brand-blue/90 py-8 text-lg font-bold group text-white shadow-xl shadow-brand-blue/20 transition-all">
                 Send Message <SendHorizontal className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
