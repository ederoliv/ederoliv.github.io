"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-dark leading-tight mb-6">
            Desenvolvedor<br />
            <span className="italic">Fullstack</span>
          </h1>
          <p className="text-primary-dark/70 text-lg md:text-xl max-w-md mb-8">
            Crio soluções web elegantes e funcionais que transformam ideias em produtos digitais excepcionais.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#portfolio"
              className="bg-primary-dark text-white px-6 py-3 rounded-full hover:bg-primary-darker transition-colors flex items-center gap-2 font-medium"
            >
              Ver projetos <ArrowRight size={18} />
            </Link>
            <Link
              href="#contato"
              className="border-2 border-primary-dark text-primary-dark px-6 py-3 rounded-full hover:bg-primary-dark/5 transition-colors font-medium"
            >
              Contato
            </Link>
          </div>
        </motion.div>

        {/* Right Content / Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-primary-mid/30 rounded-[2rem] aspect-square flex flex-col items-center justify-center p-8 max-w-md mx-auto">
            <Code2 size={80} className="text-primary-dark mb-6" strokeWidth={1.5} />
            <div className="font-medium text-primary-dark text-lg tracking-wide">
              React • Node • TypeScript
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 right-0 md:-right-6 bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg"
          >
            Disponível para freela
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
