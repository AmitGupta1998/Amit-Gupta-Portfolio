import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, X, ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    issued: "2024",
    image: "/certificates/generative-ai-mastermind.jpg",
    credentialUrl: "#",
    accent: "blue" as const,
  },
  {
    title: "Data Visualization and Dashboards with Excel and Cognos",
    issuer: "IBM",
    issued: "May 2024",
    image: "/certificates/ibm-data-visualization.jpg.png",
    credentialUrl: "https://coursera.org/share/ddd1baa5ae48fc7fba6cd5aa9394e120",
    accent: "violet" as const,
  },
  {
    title: "Excel Basics for Data Analysis",
    issuer: "IBM",
    issued: "Apr 2024",
    image: "/certificates/ibm-excel-basics.jpg.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/TAMML3G2N2P",
    accent: "cyan" as const,
  },
  {
    title: "IBM Data Analytics with Excel and R Professional Certificate",
    issuer: "IBM",
    issued: "Feb 2024",
    image: "/certificates/ibm-data-analytics-r.jpg.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/P7J2W6AL3ON",
    accent: "blue" as const,
  },
  {
    title: "Symfony Cast",
    issuer: "Symfony",
    issued: "Mar 2023",
    image: "/certificates/symfony-cast.jpg.png",
    credentialUrl: "#",
    accent: "violet" as const,
  },
];

const accentGlow = {
  blue: "shadow-[0_0_40px_rgba(59,130,246,0.25)]",
  violet: "shadow-[0_0_40px_rgba(139,92,246,0.25)]",
  cyan: "shadow-[0_0_40px_rgba(6,182,212,0.25)]",
};

const accentBorder = {
  blue: "border-brand-blue/50",
  violet: "border-brand-violet/50",
  cyan: "border-brand-cyan/50",
};

const accentText = {
  blue: "text-brand-blue",
  violet: "text-brand-violet",
  cyan: "text-brand-cyan",
};

const accentGradient = {
  blue: "from-brand-blue/80 to-brand-cyan/60",
  violet: "from-brand-violet/80 to-brand-blue/60",
  cyan: "from-brand-cyan/80 to-brand-violet/60",
};

// ─── Placeholder shown when image file doesn't exist yet ──────────────────────
function CertPlaceholder({ title, issuer, accent }: { title: string; issuer: string; accent: "blue" | "violet" | "cyan" }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${accentGradient[accent]} flex items-center justify-center opacity-60`}>
        <Award size={28} className="text-white" />
      </div>
      <p className="text-xs font-mono uppercase tracking-widest text-white/30">{issuer}</p>
      <p className="text-sm font-bold text-white/40 leading-snug">{title}</p>
      <p className="text-[10px] text-white/20 border border-white/10 rounded-full px-3 py-1">
        Add image → /public/certificates/
      </p>
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
interface LightboxProps {
  certs: typeof certifications;
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ certs, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const cert = certs[activeIndex];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      {certs.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next */}
      {certs.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Image container */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-4 max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative rounded-2xl border ${accentBorder[cert.accent]} overflow-hidden ${accentGlow[cert.accent]} w-full`}>
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full max-h-[70vh] object-contain bg-zinc-900"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const next = t.nextElementSibling as HTMLElement | null;
              if (next) next.style.display = "flex";
            }}
          />
          {/* Fallback if image missing */}
          <div className="hidden w-full h-64 bg-zinc-900 items-center justify-center flex-col gap-3 p-8 text-center">
            <Award size={40} className="text-white/20" />
            <p className="text-white/40 text-sm">Image not found — add it to <code className="text-brand-blue">/public/certificates/</code></p>
          </div>
        </div>

        {/* Meta strip */}
        <div className="flex items-center justify-between w-full px-1">
          <div>
            <p className={`text-xs font-mono uppercase tracking-widest ${accentText[cert.accent]}`}>{cert.issuer}</p>
            <h3 className="font-display text-base font-bold text-white">{cert.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Issued {cert.issued}</p>
          </div>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-semibold ${accentText[cert.accent]} hover:underline transition-all`}
          >
            View Credential <ExternalLink size={13} />
          </a>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => {}}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-white scale-125" : "bg-white/30"}`}
              aria-label={`Certificate ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Cert Card ────────────────────────────────────────────────────────────────
interface CertCardProps {
  cert: (typeof certifications)[number];
  index: number;
  onClick: () => void;
}

function CertCard({ cert, index, onClick }: CertCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative rounded-2xl border border-white/10 overflow-hidden glass transition-all duration-300 group-hover:border-${cert.accent === "blue" ? "brand-blue" : cert.accent === "violet" ? "brand-violet" : "brand-cyan"}/40 ${accentGlow[cert.accent].replace("shadow-", "group-hover:shadow-")}`}>

        {/* Cert image */}
        <div className="relative aspect-[4/3] bg-zinc-900/80 overflow-hidden">
          {!imgError ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <CertPlaceholder title={cert.title} issuer={cert.issuer} accent={cert.accent} />
          )}

          {/* Hover zoom overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-14 h-14 rounded-full glass border border-white/30 flex items-center justify-center"
            >
              <ZoomIn size={22} className="text-white" />
            </motion.div>
          </div>

          {/* Top gradient accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accentGradient[cert.accent]}`} />
        </div>

        {/* Footer info */}
        <div className="p-4 flex items-center justify-between">
          <div className="min-w-0">
            <p className={`text-[10px] font-mono uppercase tracking-widest ${accentText[cert.accent]} truncate`}>{cert.issuer}</p>
            <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 mt-0.5">{cert.title}</h3>
          </div>
          <span className="text-[10px] text-muted-foreground ml-3 shrink-0">{cert.issued}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function CertificationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openAt = useCallback((i: number) => setActiveIndex(i), []);
  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() =>
    setActiveIndex((i) => (i === null ? 0 : (i - 1 + certifications.length) % certifications.length)), []);
  const next = useCallback(() =>
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % certifications.length)), []);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-glow-violet opacity-15 pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-glow-blue opacity-15 pointer-events-none rounded-full blur-3xl" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Badge className="mb-4 bg-brand-violet/10 text-brand-violet border-brand-violet/20">
            <Award size={12} className="mr-1" /> Certifications
          </Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            My{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-cyan bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Click any certificate to view the full image. Verified credentials from top platforms.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} onClick={() => openAt(i)} />
          ))}
        </div>

        {/* Count strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            <span className="text-white font-bold text-lg">{certifications.length}</span> verified certifications across{" "}
            <span className="text-brand-blue font-semibold">cloud</span>,{" "}
            <span className="text-brand-violet font-semibold">mobile</span>, and{" "}
            <span className="text-brand-cyan font-semibold">web development</span>
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            certs={certifications}
            activeIndex={activeIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
