"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            NOSOTROS
          </h1>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
            Somos una agencia dedicada a conectar personas con el vehículo ideal,
            priorizando la transparencia y el respaldo en cada operación.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="border border-neutral-800 p-8">
            <p className="text-4xl font-black mb-3">+10</p>
            <p className="text-xs text-neutral-500 uppercase tracking-widest">
              Años de trayectoria
            </p>
          </div>
          <div className="border border-neutral-800 p-8">
            <p className="text-4xl font-black mb-3">+500</p>
            <p className="text-xs text-neutral-500 uppercase tracking-widest">
              Vehículos entregados
            </p>
          </div>
          <div className="border border-neutral-800 p-8">
            <p className="text-4xl font-black mb-3">100%</p>
            <p className="text-xs text-neutral-500 uppercase tracking-widest">
              Autos verificados
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border-t border-neutral-800 pt-16 grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">
              Nuestra misión
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Ofrecer un proceso de compra y venta claro, sin sorpresas, donde
              cada cliente se sienta acompañado por un asesor real en todo momento.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tighter">
              Cómo trabajamos
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Cada vehículo que publicamos pasa por una revisión previa. Además,
              acompañamos al cliente en financiación, transferencia y postventa.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}