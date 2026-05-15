import React from "react";
import { Github, Linkedin, Youtube, Twitter, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold text-white text-xl">
                A
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Amit Gupta
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Senior Software Developer & Tech Consultant. Specializing in high-performance Laravel backends, native Android apps, and AI-driven automation systems.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 glass rounded-xl text-muted-foreground hover:text-brand-blue hover:border-brand-blue transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Skills", "Case Studies", "Services", "Hire Me"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Tech Stack</h4>
            <ul className="space-y-4">
              {["Laravel", "Android/Kotlin", "Google APIs", "AI/ML", "React/Next.js"].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/5 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Amit Gupta. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             Available for new projects
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> & Modern Tech
          </div>
        </div>
      </div>
    </footer>
  );
}
