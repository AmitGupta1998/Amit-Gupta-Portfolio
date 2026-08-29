import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Globe } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectShowcase() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="text-left">
            <Badge className="mb-4">Portfolio</Badge>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">Case Studies</h2>
            <p className="text-muted-foreground max-w-xl">
              A curated selection of high-impact projects that demonstrate my technical breadth and business focus.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                className={`rounded-full px-6 transition-all ${filter === cat ? "bg-brand-blue" : "hover:border-brand-blue"}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden glass mb-6 border-white/5 group-hover:border-brand-blue/30 transition-all">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-black/80 backdrop-blur-md border-white/10 text-white font-medium flex items-center gap-1.5">
                      <Globe size={14} className="text-brand-blue" />
                      {project.country}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6">
                  <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Key Result</p>
                  <p className="text-sm text-white font-medium">{project.results}</p>
                </div>

                <div className="flex gap-4">
                  {project.demo && (
                    <Button variant="outline" className="rounded-full flex-1 gap-2 border-white/10 hover:border-brand-blue hover:text-brand-blue">
                      Live Demo <ExternalLink size={16} />
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="ghost" size="icon" className="rounded-full border border-white/10 hover:bg-brand-blue/10">
                      <Github size={20} />
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
