"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="py-24 bg-primary-light">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-primary-dark/70 text-lg mb-10">
            Estou disponível para novos projetos e oportunidades freela. Entre em contato e vamos transformar sua ideia em realidade.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:seuemail@exemplo.com"
              className="w-full sm:w-auto bg-primary-dark text-white px-8 py-4 rounded-full font-medium hover:bg-primary-darker transition-colors flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              Enviar Email
            </a>
            <a
              href="https://wa.me/seu_numero"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white border border-primary-dark text-primary-dark px-8 py-4 rounded-full font-medium hover:bg-primary-dark/5 transition-colors flex items-center justify-center gap-3 shadow-sm"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
