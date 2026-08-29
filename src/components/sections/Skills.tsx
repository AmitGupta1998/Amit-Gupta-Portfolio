import React from "react";
import { motion } from "motion/react";
import { SKILLS } from "@/constants";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow-violet opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-brand-violet/10 text-brand-violet border-brand-violet/20">Expertise</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Mastering the Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From low-level system design to high-level UI interactions, my skill set is built for modern performance and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 glass rounded-2xl group hover:border-brand-violet/40 transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-brand-violet uppercase tracking-widest">{skill.category}</span>
                <span className="text-sm font-bold text-white">{skill.level}%</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                {skill.name}
              </h4>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-brand-violet to-brand-blue"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
