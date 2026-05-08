"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Trabalho excepcional. Superou todas as nossas expectativas de forma impressionante.",
    author: "Maria Silva",
    role: "CEO, TechStart",
  },
  {
    id: 2,
    quote: "Profissionalismo e talento. Transformou nossa visão em realidade com código limpo e escalável.",
    author: "João Santos",
    role: "CTO, InovaApp",
  },
  {
    id: 3,
    quote: "Trabalhar com Éder foi incrível. Ele entende tanto de desenvolvimento quanto de design, uma combinação rara.",
    author: "Ana Costa",
    role: "Product Designer, Criativa",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary-dark">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          O que dizem sobre mim
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-darker/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
            >
              <p className="text-primary-light/90 font-medium leading-relaxed mb-8">
                "{item.quote}"
              </p>
              <div>
                <h4 className="text-white font-bold">{item.author}</h4>
                <p className="text-white/60 text-sm">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
