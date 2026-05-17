import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MessageSquare, Phone, Calendar, CheckCircle2, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WORDS = ["Web", "Mobile", "AI Solutions"];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = WORDS[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setSpeed(150);
        
        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 2000);
          setSpeed(100);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setSpeed(75);
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, speed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-violet/20 blur-[120px] rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
      </div>

      <div className="container mx-auto relative z-10 px-4 flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-6"
        >
          <Badge variant="outline" className="px-4 py-1.5 border-brand-blue/30 text-brand-blue bg-brand-blue/5 rounded-full flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for International Projects
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight min-h-[1.2em]"
        >
          Building Scalable <br className="md:hidden" />
          <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-cyan bg-clip-text text-transparent inline-block">
            {currentText}
            <span className="inline-block w-[3px] h-[0.8em] bg-brand-blue ml-1 animate-pulse align-middle" />
          </span>
          <br /> Professional Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          Senior Software Developer specializing in Laravel, Android Apps, Google APIs, AI Automation & Full Stack Systems. Helping businesses worldwide scale with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-20 w-full"
        >
          <a
            href="https://wa.me/919631116311?text=Hi%20Amit%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20software%20project.%20Could%20you%20please%20share%20your%20availability%20and%20a%20quote%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="rounded-full px-8 py-7 text-lg bg-brand-blue hover:bg-brand-blue/90 text-white group w-full font-bold shadow-lg shadow-brand-blue/20 border-none">
              Hire Me <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg border-brand-blue/30 text-brand-blue bg-brand-blue/5 hover:bg-brand-blue hover:text-white w-full font-bold transition-all">
              View Projects
            </Button>
          </a>
          <div className="flex gap-4 w-full sm:w-auto justify-center mt-2 sm:mt-0">
            <a
              href="https://wa.me/919631116311?text=Hi%20Amit%2C%20I%20want%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="icon" variant="ghost" className="rounded-full w-14 h-14 bg-green-500/10 text-green-500 hover:bg-green-500/20 border border-green-500/20" title="WhatsApp">
                <MessageSquare size={24} />
              </Button>
            </a>
            <a href="#contact" >
              <Button size="icon" variant="ghost" className="rounded-full w-14 h-14 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 border border-brand-blue/20" title="Book Consultation">
                <Calendar size={24} />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Hero Image / Badge Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-4xl mb-10"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden glass animate-float">
             <img 
               src="https://purevitadrinks.com/background-image.png" 
               alt="Amit Gupta's Workspace" 
               className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             
             {/* Floating Mini Cards */}
             <div className="absolute top-10 right-10 p-4 glass-dark rounded-2xl hidden md:block min-w-[160px]">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg"><Star size={18} className="fill-yellow-400" /></div>
                 <div className="text-left">
                   <p className="text-white font-bold text-lg leading-none">4.9 / 5</p>
                   <p className="text-xs text-muted-foreground mt-0.5">Client Rating</p>
                 </div>
               </div>
               <div className="flex gap-0.5 mt-1">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className={`h-1 rounded-full flex-1 ${i < 5 ? "bg-yellow-400" : "bg-white/10"}`} />
                 ))}
               </div>
               <p className="text-[10px] text-muted-foreground mt-1.5">Based on 250+ projects</p>
             </div>

             <div className="absolute bottom-10 left-10 p-4 glass-dark rounded-2xl hidden md:block min-w-[160px]">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-blue-500/20 text-blue-500 rounded-lg"><CheckCircle2 size={18} /></div>
                 <div className="text-left">
                   <p className="text-white font-bold text-lg leading-none">250+</p>
                   <p className="text-xs text-muted-foreground mt-0.5">Projects Delivered</p>
                 </div>
               </div>
               <div className="w-full bg-white/10 rounded-full h-1 mt-1">
                 <div className="bg-brand-blue h-1 rounded-full w-[92%]" />
               </div>
               <p className="text-[10px] text-muted-foreground mt-1.5">92% on-time delivery rate</p>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-brand-blue/30 overflow-hidden mx-auto mb-4 bg-muted">
                    <img
                      src="https://purevitadrinks.com/amit-gupta-portfolio-2.png"
                      alt="Amit Gupta"
                      className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Amit Gupta</h3>
                <p className="text-brand-blue text-sm font-medium">Website & Software Developer</p>
                <p className="text-white/50 text-xs mt-1 tracking-wide">AI Automation · Google Expert · Full Stack</p>
             </div>
          </div>
          
          {/* Tags */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 w-full">
            {["Laravel", "Android", "AI Automation", "API Design", "Full Stack"].map((tech) => (
              <Badge key={tech} className="bg-glass-dark border-white/5 text-white px-4 py-1">{tech}</Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
