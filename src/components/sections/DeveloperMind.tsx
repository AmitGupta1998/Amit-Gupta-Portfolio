import React from "react";
import { motion } from "motion/react";
import { Target, Layers, Users, Rocket, Bot, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: Target,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "hover:border-brand-blue/30",
    title: "Problem First, Code Second",
    body: "I don't reach for the keyboard until the problem is fully understood. Architecture decisions made early save weeks of refactoring later.",
  },
  {
    icon: Layers,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "hover:border-violet-400/30",
    title: "Build to Scale",
    body: "Every line is written with production growth in mind — clean separation of concerns, proper indexing, and API contracts that don't leak internals.",
  },
  {
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "hover:border-cyan-400/30",
    title: "User Obsessed",
    body: "Smooth UIs and intuitive flows aren't polish — they're the product. I think from the user's perspective before I think like an engineer.",
  },
  {
    icon: Rocket,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "hover:border-green-400/30",
    title: "Ship Fast, Iterate Smart",
    body: "Momentum beats perfection. Get a working version to real users, gather signal, then improve — rather than optimising in isolation.",
  },
  {
    icon: Bot,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-400/30",
    title: "Automate the Boring",
    body: "If I do something twice, I automate it. Repetitive tasks are waste — automation frees bandwidth for problems that actually need a human.",
  },
  {
    icon: ShieldCheck,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-400/30",
    title: "Security Is Non-Negotiable",
    body: "Every endpoint, every auth flow — locked down from day one. Security bolted on later is security theatre; it has to be baked in from the start.",
  },
];

export function DeveloperMindSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-brand-blue font-medium mb-4">
            How I Think
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Inside the{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
              Developer's Mind
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Great software isn't just written — it's thought through. These are
            the principles that guide every project I take on, from the first
            commit to production deploy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 ${p.border} hover:bg-white/[0.06]`}
            >
              <div
                className={`mb-4 w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center ${p.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <p.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
