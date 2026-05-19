import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Clock, MessageCircle } from "lucide-react";

const WA_NUMBER = "919631116311";

function bookOnWhatsApp(serviceTitle: string) {
  const text = encodeURIComponent(
    `Hi Amit, I'm interested in your *${serviceTitle}* service. Could you please share more details and your availability?`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
}

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-4">Solutions</Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Premium Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            Tailored solutions for businesses that demand excellence and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl flex flex-col border transition-all ${
                i === 1
                ? "bg-brand-blue/5 border-brand-blue shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                : "glass border-white/5 hover:border-white/20"
              }`}
            >
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-8 space-y-3">
                <p className="text-3xl font-display font-bold text-white">{service.price}</p>
                <p className="text-xs text-brand-blue font-mono uppercase tracking-widest">{service.timeline}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${i === 1 ? "bg-brand-blue/15 border-brand-blue/40 text-brand-blue" : "bg-white/5 border-white/10 text-white/60"}`}>
                  <Clock size={11} />
                  {service.hourlyRate}
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0">
                      <Check size={12} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Button
                onClick={() => bookOnWhatsApp(service.title)}
                className={`rounded-full w-full py-7 font-bold text-white transition-all shadow-lg ${
                  i === 1
                    ? "bg-brand-blue shadow-brand-blue/20 hover:bg-brand-blue/90"
                    : "bg-white/10 hover:bg-brand-blue hover:shadow-brand-blue/10 border border-white/10"
                }`}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Book on WhatsApp
              </Button>

              {/* Scroll to contact form */}
              <button
                onClick={scrollToContact}
                className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-brand-blue transition-colors flex items-center justify-center gap-1.5"
              >
                <ArrowRight size={11} />
                Or fill the contact form below
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
