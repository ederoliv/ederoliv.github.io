"use client";

import { motion } from "framer-motion";
import { Code, Database, LayoutTemplate, Briefcase, Smile } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="sobre" className="py-24 bg-white/50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-12">
          Sobre mim
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {/* Main Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-primary-light/50"
          >
            <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">
              Desenvolvedor apaixonado por criar experiências digitais únicas
            </h3>
            <p className="text-primary-dark/70 leading-relaxed mb-6">
              Com mais de 5 anos de experiência em desenvolvimento web, especializo-me em criar aplicações robustas e escaláveis. Minha abordagem une a estética do design com a engenharia de software, resultando em produtos que não apenas funcionam perfeitamente, mas também encantam os usuários.
            </p>
            <div className="flex gap-4 items-center text-primary-dark/50">
              <Code size={24} />
              <Database size={24} />
              <LayoutTemplate size={24} />
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="bg-primary-dark rounded-3xl p-8 text-white flex flex-col justify-center"
          >
            <div className="text-5xl font-serif font-bold mb-2">50+</div>
            <div className="text-white/80 text-sm font-medium">Projetos entregues com sucesso</div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-primary-darker rounded-3xl p-8 text-white flex flex-col justify-center"
          >
            <div className="text-5xl font-serif font-bold mb-2">100%</div>
            <div className="text-white/80 text-sm font-medium">Satisfação dos clientes</div>
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            variants={itemVariants}
            className="bg-primary-mid/30 rounded-3xl p-8"
          >
            <Code className="text-primary-dark mb-4" size={32} />
            <h4 className="font-bold text-primary-dark mb-2">Frontend</h4>
            <p className="text-sm text-primary-dark/70">React, Next.js, Tailwind CSS, TypeScript</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 shadow-sm border border-primary-light/50"
          >
            <Database className="text-primary-dark mb-4" size={32} />
            <h4 className="font-bold text-primary-dark mb-2">Backend</h4>
            <p className="text-sm text-primary-dark/70">Node.js, Express, PostgreSQL, Prisma</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-primary-light rounded-3xl p-8"
          >
            <LayoutTemplate className="text-primary-dark mb-4" size={32} />
            <h4 className="font-bold text-primary-dark mb-2">Design</h4>
            <p className="text-sm text-primary-dark/70">UI/UX, Figma, Design Systems</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
