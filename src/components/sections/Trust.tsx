import React from "react";
import { motion } from "motion/react";
import { Globe2, Package, Award, Users } from "lucide-react";

export function TrustSection() {
  const stats = [
    { label: "Global Clients", value: "60+", icon: Globe2, color: "text-blue-500" },
    { label: "Projects Completed", value: "250+", icon: Package, color: "text-violet-500" },
    { label: "Success Rate", value: "99%", icon: Award, color: "text-green-500" },
    { label: "Happy Clients", value: "55+", icon: Users, color: "text-cyan-500" },
  ];

  const countries = [
    { name: "India",         code: "in" },
    { name: "Australia",     code: "au" },
    { name: "USA",           code: "us" },
    { name: "Germany",       code: "de" },
    { name: "UK",            code: "gb" },
    { name: "UAE",           code: "ae" },
  ];

  return (
    <section className="py-12 md:py-16 relative border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-10 mb-10 md:mb-12 opacity-60">
          <p className="w-full text-center text-sm uppercase tracking-[0.2em] font-medium mb-4">Trusted By Businesses From</p>
          {countries.map((c) => (
            <div key={c.name} className="flex items-center gap-2.5 text-base font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-default">
              <img
                src={`https://flagcdn.com/w40/${c.code}.png`}
                srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
                width={24}
                height={18}
                alt={c.name}
                className="rounded-sm object-cover shadow-sm"
              />
              <span>{c.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-2.5 text-base font-medium px-4 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-default">
            <Globe2 size={22} className="text-brand-blue" />
            <span>Global Remote</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`mx-auto w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
