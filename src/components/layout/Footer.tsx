import React from "react";
import { Github, Linkedin, Youtube, Twitter, Heart, Facebook, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useVisitorCount } from "@/hooks";

const socialLinks = [
  { Icon: Github, href: "https://github.com/AmitGupta1998", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/amit-gupta-developer", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/@DeveloperBiharWala", label: "YouTube" },
  { Icon: Twitter, href: "https://x.com/AMIT5097", label: "X (Twitter)" },
  { Icon: Facebook, href: "https://www.facebook.com/codewithcode", label: "Facebook" },
];

function VisitorCount() {
  const { total, status } = useVisitorCount();

  if (status === "error") return null;

  return (
    <p
      className="text-sm text-muted-foreground flex items-center gap-2"
      aria-live="polite"
      aria-label={status === "ready" && total !== null ? `${total.toLocaleString()} visitors` : "Loading visitor count"}
    >
      <Users size={15} className="text-brand-blue" aria-hidden />
      {status === "loading" || total === null ? (
        <span className="inline-block h-4 w-20 rounded bg-white/10 animate-pulse" />
      ) : (
        <>
          <span className="text-white font-medium tabular-nums">{total.toLocaleString()}</span>
          <span>{total === 1 ? "visitor" : "visitors"}</span>
        </>
      )}
    </p>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 md:py-16 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold text-white text-xl">
                A
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Amit Dev
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Senior Software Developer & Tech Consultant. Specializing in high-performance Laravel backends, native Android apps, AI Automation, and AI-driven automation systems.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="p-3 glass rounded-xl text-muted-foreground hover:text-brand-blue hover:border-brand-blue transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Badge is displayed unaltered per Hostinger brand guidelines: no
                recolouring, cropping, or non-proportional scaling. */}
            <a
              href="https://www.hostinger.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label="Hostinger Partner — visit Hostinger"
              className="mt-8 inline-block rounded-lg p-2 -m-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <img
                src="/hostinger-partner-badge/svg/Badge_dark.svg"
                alt="Hostinger Partner"
                width={128}
                height={48}
                loading="lazy"
                decoding="async"
                className="w-32 h-auto"
              />
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: "About",       href: "#about" },
                { label: "Skills",      href: "#skills" },
                { label: "Projects",    href: "#projects" },
                { label: "Services",    href: "#services" },
                { label: "Contact",     href: "#contact" },
                { label: "Hire Me",     href: "https://wa.me/919631116311?text=Hi%20Amit%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20software%20project.%20Could%20you%20please%20share%20your%20availability%20and%20a%20quote%3F", external: true },
              ].map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-muted-foreground hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </a>
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
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Developer Bihar wala. All rights reserved.
            </p>
            <VisitorCount />
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             Available for new projects
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> & Developer Bihar wala
          </div>
        </div>
      </div>
    </footer>
  );
}
