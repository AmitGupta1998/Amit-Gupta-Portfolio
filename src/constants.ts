import { Project, Skill, Service } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "VelqIp — Grocery Delivery App",
    description: "A nutrition & wellness focused grocery delivery app — browse fresh produce, track macros, and get healthy groceries delivered to your door with real-time order tracking.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop&auto=format",
    tags: ["Android", "Kotlin", "Firebase", "Laravel"],
    category: "Android",
    results: "Live on Play Store — delivering nutrition-focused groceries with real-time tracking.",
    country: "Australia 🇦🇺",
    demo: "https://play.google.com/store/apps/details?id=com.velqip.mobile"
  },
  {
    id: "2",
    title: "Algo Trading Automation System",
    description: "Fully automated algorithmic trading platform with backtesting engine, real-time signal execution, risk management rules, and a live performance dashboard.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&auto=format",
    tags: ["Python", "FastAPI", "React", "Backtrader"],
    category: "AI Automation",
    results: "Automated trade execution with backtested strategy validation across historical market data.",
    country: "Germany 🇩🇪",
    demo: "#"
  },
  {
    id: "3",
    title: "Indian Market E-Commerce App",
    description: "Full-featured Android e-commerce app built for the Indian market — multi-vendor support, UPI & COD payments, regional language UI, and real-time order tracking.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop&auto=format",
    tags: ["Kotlin", "Firebase", "Laravel", "Razorpay"],
    category: "Android",
    results: "End-to-end shopping experience with UPI payments and multi-vendor storefront.",
    country: "India 🇮🇳",
    demo: "#"
  },
  {
    id: "6",
    title: "Doctor Appointment Booking System",
    description: "Role-based Laravel web app for clinics — patients book appointments online, doctors manage schedules & prescriptions, and admins oversee the entire clinic via a dedicated panel. REST API included for mobile integration.",
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=800&h=600&fit=crop&auto=format",
    tags: ["Laravel", "REST API", "Role-Based Auth", "MySQL"],
    category: "Laravel",
    results: "Streamlined appointment scheduling for patients, doctors, and clinic admins under one platform.",
    country: "India 🇮🇳",
    demo: "#"
  },
  {
    id: "5",
    title: "Solar Energy Panel — Gujarat",
    description: "Full e-commerce selling website for a Gujarat-based solar energy company — online product sales, rooftop solar calculator, government subsidy info, quote requests, and secure checkout.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&auto=format",
    tags: ["WordPress", "WooCommerce", "Elementor", "Razorpay"],
    category: "WordPress",
    results: "End-to-end solar panel selling platform driving online orders and qualified leads across Gujarat.",
    country: "India 🇮🇳",
    demo: "#"
  },
  {
    id: "4",
    title: "Earnmet — SaaS Digital Marketplace",
    description: "Multilanguage & multi-tenant SaaS platform for selling digital products and services. Sellers can list products, manage storefronts, and serve global customers from a single platform.",
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?w=800&h=600&fit=crop&auto=format",
    tags: ["Laravel", "Multi-Tenant", "Multilanguage", "SaaS", "Digital Products"],
    category: "SaaS",
    results: "Live production platform powering digital product & service sellers across multiple regions.",
    country: "India 🇮🇳",
    demo: "https://earnmet.in/"
  }
];

export const SKILLS: Skill[] = [
  { name: "Laravel", level: 95, icon: "laravel", category: "Backend" },
  { name: "PHP", level: 93, icon: "php", category: "Backend" },
  { name: "Android / Flutter", level: 90, icon: "android", category: "Mobile · Kotlin & Flutter" },
  { name: "Next.js / React", level: 85, icon: "react", category: "Frontend" },
  { name: "AI Automation", level: 88, icon: "bot", category: "AI" },
  { name: "Google APIs", level: 92, icon: "google", category: "Integrations" },
  { name: "Firebase", level: 90, icon: "flame", category: "Backend" },
  { name: "MySQL / PostgreSQL", level: 95, icon: "database", category: "Database" },
  { name: "WordPress", level: 88, icon: "wordpress", category: "CMS" },
  { name: "Shopify", level: 82, icon: "shopify", category: "E-Commerce" },
  { name: "Docker / AWS", level: 80, icon: "server", category: "DevOps" },
  { name: "REST API / GraphQL", level: 92, icon: "api", category: "Integrations" }
];

export const SERVICES: Service[] = [
  {
    title: "Full Stack SaaS Development",
    description: "End-to-end scalable web applications built with Laravel & Next.js.",
    price: "Starts at ₹2,50,000 (~$3,000)",
    hourlyRate: "₹2,000/hr (~$24/hr)",
    timeline: "4-12 Weeks",
    features: ["Custom Architecture", "Payment Gateway", "Admin Panel", "API Integration"]
  },
  {
    title: "Android App Development",
    description: "Native performance and sleek design with Kotlin and Firebase.",
    price: "Starts at ₹1,50,000 (~$1,800)",
    hourlyRate: "₹1,800/hr (~$22/hr)",
    timeline: "6-10 Weeks",
    features: ["Play Store Deployment", "Offline Mode", "Push Notifications", "Cloud Sync"]
  },
  {
    title: "AI & Automation Solutions",
    description: "Supercharge your business with AI workflows and automation bots.",
    price: "Starts at ₹75,000 (~$900)",
    hourlyRate: "₹2,500/hr (~$30/hr)",
    timeline: "2-4 Weeks",
    features: ["LLM Integration", "Workflow Automation", "Chatbots", "Data Extraction"]
  }
];
