"use client";

import { motion } from "framer-motion";

export default function CarCardSkeleton() {
  return (
    <div className="bg-neutral-900 border border-neutral-800">
      <div className="relative w-full h-48 bg-neutral-800 overflow-hidden">
        <Shimmer />
      </div>

      <div className="p-8">
        <div className="relative h-7 w-3/4 bg-neutral-800 overflow-hidden mb-3">
          <Shimmer />
        </div>
        <div className="relative h-9 w-1/2 bg-neutral-800 overflow-hidden mb-6">
          <Shimmer />
        </div>
        <div className="relative h-[52px] w-full border border-neutral-800 overflow-hidden">
          <Shimmer />
        </div>
      </div>
    </div>
  );
}

function Shimmer() {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
      }}
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        repeat: Infinity,
        duration: 1.4,
        ease: "easeInOut",
      }}
    />
  );
}