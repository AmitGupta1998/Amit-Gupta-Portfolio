import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300 ${
        scrolled ? "glass-dark py-2 px-4 rounded-full shadow-2xl" : "py-4 px-2"
      }`}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-bold text-white text-xl group-hover:scale-110 transition-transform">
            A
          </div>
          <span className="font-display font-bold text-lg hidden sm:block tracking-tight">
            Amit Gupta
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="rounded-full border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white px-6 border-2 font-bold transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 glass-dark rounded-3xl p-6 flex flex-col gap-4 md:hidden overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-white/10">
              <Github className="text-muted-foreground hover:text-white" />
              <Linkedin className="text-muted-foreground hover:text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
