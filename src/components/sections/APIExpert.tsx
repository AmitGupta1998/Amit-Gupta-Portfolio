import React from "react";
import { motion } from "motion/react";
import { Map, Shield, UserCheck, PlayCircle, Cloud, Bell, BarChart3, Fingerprint } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function APIExpertSection() {
  const apis = [
    { name: "Google Maps", icon: Map, color: "text-red-400" },
    { name: "Firebase", icon: Cloud, color: "text-yellow-400" },
    { name: "OAuth 2.0", icon: Shield, color: "text-blue-400" },
    { name: "Google Login", icon: UserCheck, color: "text-green-400" },
    { name: "YouTube API", icon: PlayCircle, color: "text-red-600" },
    { name: "Push Notifications", icon: Bell, color: "text-purple-400" },
    { name: "Analytics", icon: BarChart3, color: "text-cyan-400" },
    { name: "Biometrics", icon: Fingerprint, color: "text-indigo-400" },
  ];

  return (
    <section className="section-padding bg-black overflow-hidden relative">
      {/* Background Flow Lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="relative aspect-square max-w-lg mx-auto w-full">
              {/* Central Processor Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-blue/20 blur-3xl rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-dark rounded-3xl flex items-center justify-center border-brand-blue/30 rotate-45 animate-spin-slow">
                 <Cpu className="-rotate-45 text-brand-blue" size={48} />
              </div>
              
              {/* Orbiting APIs */}
              {apis.map((api, i) => {
                const angle = (i * 360) / apis.length;
                return (
                  <motion.div
                    key={i}
                    animate={{ 
                      x: [0, 10, 0], 
                      y: [0, 10, 0] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: i * 0.5 
                    }}
                    className={`absolute p-4 glass-dark rounded-2xl border-white/5 flex items-center justify-center ${api.color}`}
                    style={{
                       top: '50%',
                       left: '50%',
                       transform: `translate(-50%, -50%) rotate(${angle}deg) translate(clamp(110px, 15vw, 160px)) rotate(-${angle}deg)`
                    }}
                  >
                    <api.icon size={28} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-brand-blue/10 text-brand-blue border-brand-blue/20">Advanced Integration</Badge>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Google API <br /><span className="text-brand-blue">Mastery</span></h2>
            <p className="text-muted-foreground text-lg mb-8">
              Connecting your business to world-class infrastructure. I specialize in building complex integrations with Google Cloud Platform and various G-Suite APIs to automate and scale your operations.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Scalable Authentication", desc: "Enterprise-grade OAuth 2.0 and Google Identity flows." },
                { title: "Real-time Geolocation", desc: "Advanced Google Maps integration with routing and place logic." },
                { title: "Cloud Synchronization", desc: "Firebase-driven real-time data persistence and sync." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="mt-1 text-brand-blue"><Shield size={24} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

const Cpu = ({ className, size }: { className?: string; size?: number }) => (
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
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </svg>
);
