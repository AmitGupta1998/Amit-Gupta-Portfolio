import React from "react";
import { motion } from "motion/react";
import { Code2, Smartphone, Cpu, Layers, Database, ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const roles = [
    { title: "Senior Developer", icon: Code2, desc: "Expert in Laravel, PHP, and modern web architectures." },
    { title: "Android Expert", icon: Smartphone, iconColor: "text-green-500", desc: "Native Kotlin apps with high performance and polish." },
    { title: "AI Architect", icon: Cpu, iconColor: "text-violet-500", desc: "Integrating LLMs and automation into existing workflows." },
    { title: "Full Stack Engineer", icon: Layers, iconColor: "text-cyan-500", desc: "End-to-end systems from database design to UI/UX." },
  ];

  return (
    <section id="about" className="section-padding bg-black/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">
              Strategizing, Designing & <br />
              <span className="text-brand-blue">Scaling Your Business</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 8 years of experience in technical consulting and development, I help startups and established businesses build robust digital ecosystems. 
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I don't just write code; I architect solutions that solve real business problems—from automated SaaS dashboards to high-performance Android applications. My approach is data-driven, user-centric, and strictly production-ready.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "SaaS Systems", icon: Zap },
                { label: "AI Workflows", icon: Cpu },
                { label: "Mobile Apps", icon: Smartphone },
                { label: "CRM/ERP", icon: Database },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <item.icon size={18} />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {roles.map((role, i) => (
              <Card key={i} className="p-6 glass hover:border-brand-blue/30 transition-all group">
                <div className={`mb-4 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${role.iconColor || "text-brand-blue"} group-hover:scale-110 transition-transform`}>
                  <role.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{role.title}</h4>
                <p className="text-sm text-muted-foreground">{role.desc}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
