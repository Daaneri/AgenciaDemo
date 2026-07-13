"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 0.6 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="w-px h-10 bg-gradient-to-b from-neutral-400 to-transparent"
      />
    </motion.div>
  );
}