"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho de compras.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Dashboard analítico para acompanhamento de métricas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Tailwind", "Recharts", "Prisma"],
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Aplicativo bancário com transações em tempo real.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Ferramenta de geração de conteúdo baseada em IA.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "OpenAI API", "React", "Next.js"],
    link: "#",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-16">
          Projetos em destaque
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-primary-mid/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/20 transition-colors duration-500" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-primary-dark mb-2">
                {project.title}
              </h3>
              <p className="text-primary-dark/70 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-light rounded-full text-xs font-medium text-primary-dark border border-primary-mid/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary-darker transition-colors"
              >
                Ver projeto <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
