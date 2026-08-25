import React from "react";
import { motion } from "motion/react";
import { Youtube, TrendingUp, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CHANNEL_URL = "https://www.youtube.com/@DeveloperBiharWala";

function LiveCounter() {
  const [count, setCount] = React.useState(87);

  React.useEffect(() => {
    // Tick every 3-6s, add 1-3 views randomly (10% faster than real)
    const tick = () => {
      setCount((c) => c + Math.floor(1 + Math.random() * 3));
      setTimeout(tick, 3000 + Math.random() * 3000);
    };
    const t = setTimeout(tick, 3000 + Math.random() * 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex items-center gap-2 mb-8 px-3 py-2 rounded-full bg-red-600/10 border border-red-600/20 w-fit">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
      </span>
      <span className="text-xs text-red-400 font-mono font-semibold">
        LIVE · <span className="tabular-nums">{count}</span> views in last 48 hrs
      </span>
      <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">+10% monthly</span>
    </div>
  );
}

const VIDEOS = [
  {
    label: "PHP Fundamentals",
    desc: "23 videos · Learn PHP from scratch",
    img: "https://img.youtube.com/vi/x5FbX-SohKA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=x5FbX-SohKA&list=PLwkQe2RPwt6ErayBVQd19Nt26MiPwkzuR",
    tag: "23 videos",
    color: "from-purple-500/40",
  },
  {
    label: "WordPress",
    desc: "17 videos · PhonePe + payment setup",
    img: "https://img.youtube.com/vi/8ovOvJ4LCLA/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=8ovOvJ4LCLA&list=PLwkQe2RPwt6FNw33uJp1hRCc2o6L7DQUl",
    tag: "17 videos",
    color: "from-blue-500/40",
  },
  {
    label: "Web Development",
    desc: "49 videos · Full stack projects",
    img: "https://img.youtube.com/vi/_0VDI2uCpMQ/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=_0VDI2uCpMQ&list=PLwkQe2RPwt6G9pfi6F3mT61L9uEZHbInk",
    tag: "49 videos",
    color: "from-green-500/40",
  },
  {
    label: "Payment Gateway",
    desc: "12 episodes · PhonePe, Stripe, Paypal",
    img: "https://img.youtube.com/vi/Cwfs4f7Izbs/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=Cwfs4f7Izbs&list=PLwkQe2RPwt6FCX2dtSk3oN8_RuxFbeDUL",
    tag: "12 episodes",
    color: "from-yellow-500/40",
  },
];

const STATS = [
  { value: "1.2K+", label: "Subscribers", icon: "👥" },
  { value: "973",   label: "Views · Last 28d", icon: "👁️" },
  { value: "20.5h", label: "Watch Time · Month", icon: "⏱️" },
];

export function ContentCreatorSection() {
  return (
    <section className="section-padding bg-zinc-900/40">
      <div className="container mx-auto px-4">
        <div className="glass p-5 sm:p-8 lg:p-16 rounded-[2rem] lg:rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left */}
            <div>
              <Badge className="mb-4 bg-red-600/10 text-red-500 border-red-600/20">Community</Badge>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                Code With <br /><span className="text-red-600">Code Official</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I share real-world coding tutorials on Laravel, Android, Flutter, and AI Automation — helping developers in India and globally build better software and grow their freelancing career.
              </p>

              <LiveCounter />

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-end gap-1.5">
                      <h4 className="text-3xl font-bold text-white leading-none">{s.value}</h4>
                      <span className="text-lg mb-0.5">{s.icon}</span>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full bg-red-600 hover:bg-red-700 gap-2 font-bold shadow-lg shadow-red-600/20">
                    <Youtube size={20} /> Watch Tutorials
                  </Button>
                </a>
                <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full border-red-600/30 text-red-400 hover:bg-red-600/10 gap-2">
                    <TrendingUp size={16} /> Subscribe Free
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — video grid */}
            <div className="grid grid-cols-2 gap-4">
              {VIDEOS.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-video border border-white/5 block"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-transparent to-transparent opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Tag */}
                  <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-white/80 border border-white/10">
                    {item.tag}
                  </span>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-bold text-white leading-tight">{item.label}</p>
                    <p className="text-[10px] text-white/50 mt-0.5">{item.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
