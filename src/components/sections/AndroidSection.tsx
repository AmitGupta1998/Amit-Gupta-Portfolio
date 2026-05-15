import React from "react";
import { motion } from "motion/react";
import { Smartphone, Zap, Wifi, Database, BellRing, Search, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AndroidSection() {
  return (
    <section className="section-padding bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-500/10 text-green-500 border-green-500/20">Mobile Development</Badge>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Impactful <br /><span className="text-green-500">Android Apps</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
              Native Android development with Kotlin and Java. I build apps that are not just visually stunning but also technically superior, focusing on performance, battery efficiency, and offline availability.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
               {[
                 { icon: Layout, title: "Modern UI", desc: "Jetpack Compose driven smooth interfaces." },
                 { icon: Wifi, title: "Offline First", desc: "Data sync and local persistence with Room." },
                 { icon: BellRing, title: "Engagement", desc: "Firebase Cloud Messaging for notifications." },
                 { icon: Shield, title: "Security", desc: "Secure data storage and biometrics." },
               ].map((item, i) => (
                 <div key={i}>
                   <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                     <item.icon size={20} />
                   </div>
                   <h4 className="text-white font-bold mb-1">{item.title}</h4>
                   <p className="text-sm text-muted-foreground">{item.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[280px] h-[580px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>
               <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none z-10" />
               <div className="h-full w-full bg-black p-4 pt-12 flex flex-col gap-4">
                  <div className="w-full h-32 rounded-2xl bg-zinc-800 animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-green-500/20"></div>
                    <div className="flex-1 space-y-2 py-2">
                      <div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
                      <div className="h-2 w-1/2 bg-zinc-800 rounded opacity-50"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="aspect-square bg-zinc-800 rounded-xl"></div>
                    <div className="aspect-square bg-zinc-800 rounded-xl"></div>
                  </div>
                  <div className="flex-1 bg-zinc-900/50 rounded-2xl flex items-center justify-center border border-white/5">
                     <Smartphone className="text-green-500 opacity-20" size={64} />
                  </div>
               </div>
            </div>
            
            {/* Floaties */}
            <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute top-20 -right-10 p-4 glass rounded-2xl border-white/5 shadow-xl hidden md:block"
            >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-green-500/10 text-green-500 rounded-lg"><Zap size={20} /></div>
                 <span className="text-sm font-bold text-white">Fast Sync</span>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute bottom-20 -left-10 p-4 glass rounded-2xl border-white/5 shadow-xl hidden md:block"
            >
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><Database size={20} /></div>
                 <span className="text-sm font-bold text-white">Local DB</span>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Shield = ({ className, size }: { className?: string; size?: number }) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);
