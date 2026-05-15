import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  const testimonials = [
    {
       name: "Saurabh Sharma",
       role: "Founder, TechFlow India",
       content: "Amit is an absolute pro. He transformed our manual CRM into a fully automated SaaS machine. His expertise in Google APIs saved us months of development time.",
       avatar: "https://i.pravatar.cc/100?u=saurabh"
    },
    {
       name: "James Wilson",
       role: "Product Lead, Sentry Logistics",
       content: "Building an Android app with Amit was the best decision for our company. The app is fast, offline-ready, and the integration with our Laravel backend is seamless.",
       avatar: "https://i.pravatar.cc/100?u=james"
    },
    {
       name: "Elena Richter",
       role: "CTO, NextGen Apps Germany",
       content: "Exceeded all expectations. Amit's code quality and architectural decisions are top-tier. Highly recommended for complex full-stack projects.",
       avatar: "https://i.pravatar.cc/100?u=elena"
    }
  ];

  return (
    <section className="section-padding bg-black relative">
       <div className="absolute inset-0 bg-glow-blue opacity-20" />
       
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="font-display text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 glass rounded-3xl relative flex flex-col h-full"
              >
                <Quote className="absolute top-6 right-6 text-brand-blue/20" size={40} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="text-yellow-500 fill-yellow-500" size={14} />)}
                </div>
                <p className="text-white/80 mb-8 italic italic-serif leading-relaxed">"{t.content}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <img src={t.avatar} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}
