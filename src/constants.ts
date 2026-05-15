import { Project, Skill, Service } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Global Supply Chain SaaS",
    description: "A comprehensive Laravel-based ERP for international logistics with real-time tracking.",
    image: "https://picsum.photos/seed/logistics/800/600",
    tags: ["Laravel", "MySQL", "Vue.js", "Redis"],
    category: "SaaS",
    results: "Reduced shipping overhead by 25% for 100+ clients.",
    country: "Australia 🇦🇺",
    demo: "#"
  },
  {
    id: "2",
    title: "AI Voice Automation Bot",
    description: "Automated customer support system using OpenAI API and Python for a real estate firm.",
    image: "https://picsum.photos/seed/ai-bot/800/600",
    tags: ["OpenAI", "Python", "FastAPI", "React"],
    category: "AI Automation",
    results: "Handled 10,000+ monthly calls with 95% accuracy.",
    country: "Germany 🇩🇪",
    github: "#"
  },
  {
    id: "3",
    title: "EcoTrack Android App",
    description: "Native Kotlin app for tracking carbon footprint with Firebase integration.",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["Kotlin", "Firebase", "Google Maps API"],
    category: "Android",
    results: "100k+ downloads on Play Store with 4.8 rating.",
    country: "India 🇮🇳",
    demo: "#"
  },
  {
    id: "4",
    title: "FinTech Admin Dashboard",
    description: "High-security admin panel for managing cross-border transactions and user verification.",
    image: "https://picsum.photos/seed/fintech/800/600",
    tags: ["Laravel", "Livewire", "Tailwind", "PostgreSQL"],
    category: "Full Stack",
    results: "Secured transactions worth $50M annually.",
    country: "USA 🇺🇸",
    demo: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "Laravel", level: 95, icon: "laravel", category: "Backend" },
  { name: "Android (Kotlin)", level: 90, icon: "android", category: "Mobile" },
  { name: "Next.js / React", level: 85, icon: "react", category: "Frontend" },
  { name: "AI Automation", level: 88, icon: "bot", category: "AI" },
  { name: "Google APIs", level: 92, icon: "google", category: "Integrations" },
  { name: "Firebase", level: 90, icon: "flame", category: "Backend" },
  { name: "MySQL / PostgreSQL", level: 95, icon: "database", category: "Database" },
  { name: "Docker / AWS", level: 80, icon: "server", category: "DevOps" }
];

export const SERVICES: Service[] = [
  {
    title: "Full Stack SaaS Development",
    description: "End-to-end scalable web applications built with Laravel & Next.js.",
    price: "Starts at $5,000",
    timeline: "4-12 Weeks",
    features: ["Custom Architecture", "Payment Gateway", "Admin Panel", "API Integration"]
  },
  {
    title: "Android App Development",
    description: "Native performance and sleek design with Kotlin and Firebase.",
    price: "Starts at $3,500",
    timeline: "6-10 Weeks",
    features: ["Play Store Deployment", "Offline Mode", "Push Notifications", "Cloud Sync"]
  },
  {
    title: "AI & Automation Solutions",
    description: "Supercharge your business with AI workflows and automation bots.",
    price: "Starts at $2,000",
    timeline: "2-4 Weeks",
    features: ["LLM Integration", "Workflow Automation", "Chatbots", "Data Extraction"]
  }
];
