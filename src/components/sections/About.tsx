import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { Code2, Smartphone, Cpu, Layers, Database, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

type Role = {
  title: string;
  icon: React.ElementType;
  iconColor?: string;
  desc: string;
};

const roles: Role[] = [
  { title: "Senior Developer", icon: Code2, desc: "Expert in Laravel, PHP, and modern web architectures." },
  { title: "Android Expert", icon: Smartphone, iconColor: "text-green-500", desc: "Native Kotlin apps with high performance and polish." },
  { title: "AI Architect", icon: Cpu, iconColor: "text-violet-500", desc: "Integrating LLMs and automation into existing workflows." },
  { title: "Full Stack Engineer", icon: Layers, iconColor: "text-cyan-500", desc: "End-to-end systems from database design to UI/UX." },
];

const highlights = [
  { label: "SaaS Systems", icon: Zap },
  { label: "AI Workflows", icon: Cpu },
  { label: "Mobile Apps", icon: Smartphone },
  { label: "CRM/ERP", icon: Database },
];

function RoleCard({
  role,
  index,
  progress,
  reduced,
}: {
  role: Role;
  index: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const fromLeft = index % 2 === 0;

  // Each card owns a window of scroll progress where it is the focused one.
  const center = 0.22 + index * 0.14;
  const focus = useTransform(
    progress,
    [center - 0.13, center - 0.025, center + 0.025, center + 0.13],
    [0, 1, 1, 0]
  );
  // Once the sequence has played through, every card settles into the focused state.
  const settle = useTransform(progress, [0.74, 0.86], [0, 1]);
  const active = useTransform([focus, settle], ([f, s]: number[]) => Math.max(f, s));
  // Fades the whole set in on entry and out on exit, independent of the focus cycle.
  const gate = useTransform(progress, [0, 0.1, 0.93, 1], [0, 1, 1, 0.4]);

  const rotateY = useTransform(active, [0, 1], [fromLeft ? 22 : -22, 0]);
  const rotateX = useTransform(active, [0, 1], [14, 0]);
  const z = useTransform(active, [0, 1], [-170, 90]);
  const scale = useTransform(active, [0, 1], [0.9, 1.04]);
  const blurPx = useTransform(active, [0, 1], [5, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  const focusOpacity = useTransform(active, [0, 1], [0.32, 1]);
  const opacity = useTransform([focusOpacity, gate], ([a, g]: number[]) => a * g);
  const boxShadow = useTransform(
    active,
    [0, 1],
    ["0px 0px 0px rgba(59,130,246,0)", "0px 28px 60px rgba(59,130,246,0.28)"]
  );

  // Pointer-driven tilt layered on top of the scroll transform.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springCfg = { stiffness: 180, damping: 18, mass: 0.4 };
  const tiltX = useSpring(useTransform(py, [-0.5, 0.5], [12, -12]), springCfg);
  const tiltY = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), springCfg);
  const glareX = useTransform(px, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["15%", "85%"]);
  const glare = useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, rgba(59,130,246,0.16), transparent 70%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  // `filter` forces the blurred element to flatten, so the 3D chain restarts
  // below it with its own transformPerspective.
  return (
    <motion.div className="h-full" style={reduced ? undefined : { filter, opacity }}>
      <motion.div
        className="h-full [transform-style:preserve-3d]"
        style={
          reduced
            ? undefined
            : { rotateX, rotateY, z, scale, transformPerspective: 1200, transformStyle: "preserve-3d" }
        }
      >
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="rounded-xl h-full [transform-style:preserve-3d]"
          style={
            reduced
              ? undefined
              : { rotateX: tiltX, rotateY: tiltY, boxShadow, transformStyle: "preserve-3d" }
          }
        >
          <Card className="relative h-full p-6 glass hover:border-brand-blue/30 transition-colors group [transform-style:preserve-3d]">
            {!reduced && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: glare }}
              />
            )}
            <div
              className={`relative mb-4 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-transform ${role.iconColor || "text-brand-blue"} ${
                reduced
                  ? "group-hover:scale-110"
                  : "[transform:translateZ(45px)] group-hover:[transform:translateZ(60px)_scale(1.1)]"
              }`}
            >
              <role.icon size={28} />
            </div>
            <h4
              className={`relative text-xl font-bold text-white mb-2 ${reduced ? "" : "[transform:translateZ(30px)]"}`}
            >
              {role.title}
            </h4>
            <p
              className={`relative text-sm text-muted-foreground ${reduced ? "" : "[transform:translateZ(18px)]"}`}
            >
              {role.desc}
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const textRotateY = useTransform(progress, [0, 0.45, 0.85, 1], [18, 0, 0, -12]);
  const textZ = useTransform(progress, [0, 0.45, 0.85, 1], [-260, 0, 0, -120]);
  const textOpacity = useTransform(progress, [0, 0.18, 0.9, 1], [0, 1, 1, 0.35]);
  const headingZ = useTransform(progress, [0, 0.45], [-120, 60]);
  const bodyZ = useTransform(progress, [0, 0.45], [-60, 25]);
  const chipsZ = useTransform(progress, [0.1, 0.55], [-90, 40]);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-black/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={reduced ? undefined : { perspective: "1400px", perspectiveOrigin: "50% 50%" }}
        >
          <motion.div
            style={
              reduced
                ? undefined
                : { rotateY: textRotateY, z: textZ, opacity: textOpacity, transformStyle: "preserve-3d" }
            }
          >
            <motion.h2
              className="font-display text-3xl md:text-5xl font-bold text-white mb-8"
              style={reduced ? undefined : { z: headingZ }}
            >
              Strategizing, Designing & <br />
              <span className="text-brand-blue">Scaling Your Business</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
              style={reduced ? undefined : { z: bodyZ }}
            >
              With over 8 years of experience in technical consulting and development, I help startups and established businesses build robust digital ecosystems.
            </motion.p>
            <motion.p
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
              style={reduced ? undefined : { z: bodyZ }}
            >
              I don't just write code; I architect solutions that solve real business problems—from automated SaaS dashboards to high-performance Android applications. My approach is data-driven, user-centric, and strictly production-ready.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6"
              style={reduced ? undefined : { z: chipsZ }}
            >
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <item.icon size={18} />
                  </div>
                  {item.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={reduced ? undefined : { perspective: "1200px", transformStyle: "preserve-3d" }}
          >
            {roles.map((role, i) => (
              <RoleCard key={role.title} role={role} index={i} progress={progress} reduced={reduced} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
