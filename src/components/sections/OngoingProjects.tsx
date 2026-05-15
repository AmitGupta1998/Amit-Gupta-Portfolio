import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Timer, Rocket, Hammer, Activity } from "lucide-react";

export function OngoingProjects() {
  const ongoing = [
    {
      title: "AI Automation CRM",
      status: "Beta Testing",
      progress: 85,
      icon: Rocket,
      desc: "Custom CRM with AI lead scoring and automated WhatsApp sequences."
    },
    {
      title: "Cross-Platform Trading App",
      status: "Development",
      progress: 60,
      icon: Hammer,
      desc: "Real-time stock news analyzer with Android and iOS support."
    },
    {
      title: "SaaS Multi-Tenant Boilerplate",
      status: "Architecting",
      progress: 30,
      icon: Timer,
      desc: "High-performance Laravel/Next.js stack with multi-tenancy support."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-brand-blue/5">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <Badge variant="outline" className="mb-4 text-brand-blue border-brand-blue animate-pulse">In Development</Badge>
          <h2 className="font-display text-4xl font-bold text-white mb-4">Future in Progress</h2>
          <p className="text-muted-foreground">Current products and client work reaching completion soon.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ongoing.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass-dark rounded-3xl relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl">
                  <item.icon size={28} />
                </div>
                <Badge variant="ghost" className="bg-white/5 text-white/60 text-[10px] uppercase tracking-widest">{item.status}</Badge>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">{item.desc}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="text-brand-blue">{item.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-blue"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
