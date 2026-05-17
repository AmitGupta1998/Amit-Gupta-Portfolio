export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Laravel" | "Android" | "AI Automation" | "Full Stack" | "SaaS";
  results: string;
  country?: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  hourlyRate: string;
  timeline: string;
  features: string[];
}
