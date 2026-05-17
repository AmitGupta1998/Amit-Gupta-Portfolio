import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Zap, Wifi, ShoppingCart, Star, Search, Heart, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PRODUCTS = [
  { name: "Air Sneakers", price: "₹2,499", original: "₹3,999", rating: 4.8, color: "from-blue-500/30 to-blue-900/40", emoji: "👟", tag: "37% off" },
  { name: "Smart Watch", price: "₹8,999", original: "₹14,999", rating: 4.9, color: "from-violet-500/30 to-violet-900/40", emoji: "⌚", tag: "Hot" },
  { name: "Wireless Buds", price: "₹1,799", original: "₹2,999", rating: 4.7, color: "from-green-500/30 to-green-900/40", emoji: "🎧", tag: "New" },
  { name: "Laptop Bag", price: "₹999", original: "₹1,799", rating: 4.6, color: "from-orange-500/30 to-orange-900/40", emoji: "💼", tag: "Deal" },
];

const CATEGORIES = ["All", "Fashion", "Tech", "Home"];

function EcommercePhone() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % CATEGORIES.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto w-[270px] h-[560px] bg-zinc-900 rounded-[3rem] border-[7px] border-zinc-700 shadow-2xl shadow-green-500/10 overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-800 rounded-b-2xl z-20" />

      {/* Screen */}
      <div className="h-full w-full bg-zinc-950 flex flex-col pt-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <p className="text-[10px] text-green-400 font-mono">FlutterShop</p>
            <p className="text-white font-bold text-sm leading-tight">Good morning, Rahul 👋</p>
          </div>
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
              <Bell size={13} className="text-white/60" />
            </div>
            <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
              <ShoppingCart size={13} className="text-green-400" />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mx-4 mb-3 flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/5">
          <Search size={12} className="text-white/30" />
          <span className="text-[11px] text-white/30">Search products...</span>
        </div>

        {/* Categories */}
        <div className="flex gap-2 px-4 mb-3">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`text-[10px] px-2.5 py-1 rounded-full font-semibold transition-all ${
                active === i
                  ? "bg-green-500 text-black"
                  : "bg-white/5 text-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Banner */}
        <div className="mx-4 mb-3 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/20 px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-green-400 font-semibold">MEGA SALE</p>
            <p className="text-white text-xs font-bold">Up to 60% OFF</p>
          </div>
          <span className="text-2xl">🛍️</span>
        </div>

        {/* Products falling grid */}
        <div className="flex-1 overflow-hidden px-4">
          <p className="text-[10px] text-white/40 mb-2 font-mono uppercase tracking-widest">Featured</p>
          <div className="grid grid-cols-2 gap-2">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                  repeatDelay: 4,
                  repeatType: "loop",
                }}
                className={`rounded-2xl bg-gradient-to-br ${p.color} border border-white/5 p-2.5 relative overflow-hidden`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[9px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full font-semibold">{p.tag}</span>
                  <Heart size={10} className="text-white/30" />
                </div>
                <div className="text-center py-1 text-2xl">{p.emoji}</div>
                <p className="text-white text-[10px] font-bold leading-tight truncate">{p.name}</p>
                <p className="text-green-400 text-[11px] font-bold">{p.price}</p>
                <p className="text-white/30 text-[9px] line-through">{p.original}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={8} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-[9px] text-white/50">{p.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="flex justify-around items-center px-4 py-3 border-t border-white/5 mt-2">
          {["🏠", "🔍", "❤️", "👤"].map((icon, i) => (
            <div key={i} className={`text-base ${i === 0 ? "opacity-100" : "opacity-30"}`}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AndroidSection() {
  return (
    <section className="section-padding bg-zinc-950/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-500/10 text-green-500 border-green-500/20">Mobile Development</Badge>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Impactful <br />
              <span className="text-green-500">Android & Flutter</span>
              <br />
              <span className="text-2xl md:text-3xl text-white/60 font-medium">Apps</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Native Android (Kotlin) and cross-platform Flutter development. I build apps that are visually stunning and technically superior — focusing on performance, smooth animations, battery efficiency, and offline-first architecture.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { icon: Smartphone, title: "Flutter UI", desc: "Pixel-perfect cross-platform UI with Flutter widgets." },
                { icon: Wifi, title: "Offline First", desc: "Data sync and local persistence with Room & Hive." },
                { icon: Zap, title: "Performance", desc: "60fps animations, Kotlin coroutines, lazy loading." },
                { icon: ShoppingCart, title: "E-Commerce", desc: "Full Shopify / custom cart apps for Android & iOS." },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                    <item.icon size={20} />
                  </div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Kotlin", "Flutter", "Dart", "Jetpack Compose", "Firebase", "Play Store"].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <EcommercePhone />

            {/* Floatie — Fast Sync */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-16 -right-6 p-3 glass rounded-2xl border-white/5 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-500/10 text-green-500 rounded-lg"><Zap size={16} /></div>
                <span className="text-xs font-bold text-white">Fast Sync</span>
              </div>
            </motion.div>

            {/* Floatie — Flutter */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-24 -left-6 p-3 glass rounded-2xl border-white/5 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">💙</span>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Flutter</p>
                  <p className="text-[10px] text-muted-foreground">Android + iOS</p>
                </div>
              </div>
            </motion.div>

            {/* Floatie — Play Store */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 -right-6 p-3 glass rounded-2xl border-white/5 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">▶️</span>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Play Store</p>
                  <p className="text-[10px] text-green-400">Ready</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
