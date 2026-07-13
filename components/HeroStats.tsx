"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { end: 10, suffix: "+", label: "Años de trayectoria" },
  { end: 500, suffix: "+", label: "Vehículos entregados" },
  { end: 100, suffix: "%", label: "Autos verificados" },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="relative z-10 mt-16 grid grid-cols-3 gap-4 md:gap-16 max-w-2xl mx-auto border-t border-neutral-800 pt-10"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl md:text-5xl font-black tracking-tighter text-cyan-400">
            <AnimatedCounter end={stat.end} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">
            {stat.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}