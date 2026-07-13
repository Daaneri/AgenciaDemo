"use client";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            CONTACTO
          </h1>
          <p className="text-xl text-neutral-400 font-light mb-16">
            Escribinos y te respondemos a la brevedad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <ContactForm />

          <div>
            <div className="border border-neutral-800 bg-neutral-900/50 p-8 mb-8">
              <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">
                Contacto directo
              </p>
              <p className="font-bold text-lg mb-6">
                ¿Preferís hablar directo con un asesor?
              </p>
              <a
                href="https://wa.me/5493400000000?text=Hola,%20quiero%20mas%20informacion."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-center hover:bg-neutral-200 transition"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <div className="space-y-4 text-neutral-400">
              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="uppercase tracking-widest text-xs">Horario</span>
                <span className="text-white">Lun a Vie, 9 a 18hs</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-4">
                <span className="uppercase tracking-widest text-xs">Email</span>
                <span className="text-white">contacto@agenciademo.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}