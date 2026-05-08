"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary-light/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="font-serif font-bold text-xl text-primary-dark tracking-tight">
          Eder Oliveira
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="#sobre" className="text-primary-dark/80 hover:text-primary-dark transition-colors">
            Sobre
          </Link>
          <Link href="#portfolio" className="text-primary-dark/80 hover:text-primary-dark transition-colors">
            Portfólio
          </Link>
          <Link
            href="#contato"
            className="bg-primary-dark text-white px-5 py-2 rounded-full hover:bg-primary-darker transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
