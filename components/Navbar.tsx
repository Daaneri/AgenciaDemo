"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        backgroundColor: isScrolled ? "rgba(5, 5, 5, 0.8)" : "rgba(5, 5, 5, 0)",
        borderColor: isScrolled ? "rgba(38, 38, 38, 1)" : "rgba(38, 38, 38, 0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md border-b"
    >
      <Link href="/" className="text-2xl font-bold tracking-tighter">
        TROYA <span className="text-cyan-400">AUTOMOTORES</span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-neutral-300">
        <Link href="/" className="hover:text-cyan-400 transition">
          Catálogo
        </Link>
        <Link href="/nosotros" className="hover:text-cyan-400 transition">
          Nosotros
        </Link>
        <Link href="/contacto" className="hover:text-cyan-400 transition">
          Contacto
        </Link>
      </div>

      <a
        href="https://wa.me/5493400000000?text=Hola,%20quiero%20mas%20informacion."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-400 text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-cyan-300 transition"
      >
        WhatsApp
      </a>
    </motion.nav>
  );
}