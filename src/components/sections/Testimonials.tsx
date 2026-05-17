import React from "react";
import { Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Saurabh Sharma",
    role: "Founder, TechFlow India",
    country: "🇮🇳",
    rating: 5,
    content: "Amit transformed our manual CRM into a fully automated SaaS machine. His expertise in Google APIs saved us months of development time. Absolute pro!",
    avatar: "https://i.pravatar.cc/100?u=saurabh",
  },
  {
    name: "James Wilson",
    role: "Product Lead, Sentry Logistics",
    country: "🇦🇺",
    rating: 5,
    content: "Building an Android app with Amit was the best decision for our company. Fast, offline-ready, and the Laravel backend integration is seamless.",
    avatar: "https://i.pravatar.cc/100?u=james",
  },
  {
    name: "Elena Richter",
    role: "CTO, NextGen Apps",
    country: "🇩🇪",
    rating: 5,
    content: "Exceeded all expectations. Amit's code quality and architectural decisions are top-tier. Highly recommended for complex full-stack projects.",
    avatar: "https://i.pravatar.cc/100?u=elena",
  },
  {
    name: "Ravi Menon",
    role: "CEO, AutomatePro",
    country: "🇮🇳",
    rating: 5,
    content: "The AI automation bot Amit built reduced our support load by 70%. It handles WhatsApp, email, and CRM updates — all without human intervention.",
    avatar: "https://i.pravatar.cc/100?u=ravi",
  },
  {
    name: "Mohammed Al-Farsi",
    role: "Director, Gulf ERP Solutions",
    country: "🇦🇪",
    rating: 5,
    content: "Delivered a full ERP on time with zero bugs in production. Amit's communication and technical depth gave us full confidence throughout the project.",
    avatar: "https://i.pravatar.cc/100?u=mfarsi",
  },
  {
    name: "Priya Nair",
    role: "Startup Founder, HealthSync",
    country: "🇮🇳",
    rating: 5,
    content: "We needed a HIPAA-compliant app fast. Amit delivered a polished Android + Laravel solution in under 6 weeks. Outstanding work ethic and quality.",
    avatar: "https://i.pravatar.cc/100?u=priya",
  },
  {
    name: "Tom Becker",
    role: "Engineering Lead, LogiTech GmbH",
    country: "🇩🇪",
    rating: 5,
    content: "We've worked with many offshore developers. Amit stands out — clean code, proactive updates, and he genuinely cares about the product outcome.",
    avatar: "https://i.pravatar.cc/100?u=tombecker",
  },
  {
    name: "Ankit Verma",
    role: "Co-Founder, FinBridge",
    country: "🇮🇳",
    rating: 5,
    content: "Amit built our entire payment gateway integration + admin dashboard in record time. The AI-powered fraud detection he added was a game-changer.",
    avatar: "https://i.pravatar.cc/100?u=ankitv",
  },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="relative flex-shrink-0 w-80 p-6 glass rounded-3xl border border-white/5 flex flex-col gap-4 mx-3">
      <Quote className="absolute top-5 right-5 text-brand-blue/20" size={32} />
      <div className="flex gap-1">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 fill-yellow-400" size={13} />
        ))}
      </div>
      <p className="text-white/75 text-sm leading-relaxed italic">"{t.content}"</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover bg-muted"
          referrerPolicy="no-referrer"
        />
        <div>
          <p className="text-white font-bold text-sm">{t.name} {t.country}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function ScrollRow({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex ${reverse ? "animate-scroll-reverse" : "animate-scroll"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-blue opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 mb-14 text-center">
        <Badge className="mb-4">Testimonials</Badge>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
          Client <span className="text-brand-blue">Success</span> Stories
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Real results from real clients across India, Germany, Australia, UAE and beyond.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <ScrollRow items={row1} />
        <ScrollRow items={row2} reverse />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />
    </section>
  );
}
