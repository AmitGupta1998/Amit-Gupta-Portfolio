import React from "react";
import { motion } from "motion/react";
import { Youtube, Users, Video, BookOpen, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ContentCreatorSection() {
  return (
    <section className="section-padding bg-zinc-900/40">
      <div className="container mx-auto px-4">
        <div className="glass p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <Badge className="mb-4 bg-red-600/10 text-red-500 border-red-600/20">Community</Badge>
               <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Empowering the <br /><span className="text-red-600">Dev Community</span></h2>
               <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                 Beyond consulting, I love sharing tech knowledge. On my YouTube channel, I teach Laravel, Android, and AI integration to thousands of developers globally.
               </p>

               <div className="flex flex-wrap gap-10 mb-10">
                 <div>
                   <h4 className="text-4xl font-bold text-white">50k+</h4>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Subscribers</p>
                 </div>
                 <div>
                   <h4 className="text-4xl font-bold text-white">2M+</h4>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Views</p>
                 </div>
                 <div>
                   <h4 className="text-4xl font-bold text-white">200+</h4>
                   <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Tutorials</p>
                 </div>
               </div>

               <Button size="lg" className="rounded-full bg-red-600 hover:bg-red-700 gap-2">
                 <Youtube size={20} /> Watch Tutorials
               </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Laravel Guides", img: "https://picsum.photos/seed/youtube1/400/250" },
                 { label: "Android Tutorials", img: "https://picsum.photos/seed/youtube2/400/250" },
                 { label: "AI Experiments", img: "https://picsum.photos/seed/youtube3/400/250" },
                 { label: "Freelancing Tips", img: "https://picsum.photos/seed/youtube4/400/250" },
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-video border border-white/5"
                 >
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white">{item.label}</span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <PlayCircle className="text-white" size={32} />
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PlayCircle = ({ className, size }: { className?: string; size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);
