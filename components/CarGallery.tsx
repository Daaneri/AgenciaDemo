"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarImage from "./CarImage";

interface CarGalleryProps {
  images: string[];
  alt: string;
}

export default function CarGallery({ images, alt }: CarGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function goTo(index: number) {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }

  function goNext() {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % images.length);
  }

  function goPrev() {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div>
      {/* Imagen principal */}
      <div className="relative h-96 border border-neutral-800 overflow-hidden bg-neutral-800">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <CarImage
              src={images[activeIndex]}
              alt={`${alt} - foto ${activeIndex + 1}`}
              className="w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-neutral-700 text-white hover:bg-black transition"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Foto siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/60 border border-neutral-700 text-white hover:bg-black transition"
            >
              ›
            </button>

            <div className="absolute bottom-3 right-3 bg-black/60 border border-neutral-700 px-3 py-1 text-xs tracking-widest text-neutral-300">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 mt-3">
          {images.map((img, index) => (
            <button
              key={img}
              onClick={() => goTo(index)}
              className={`relative h-20 border overflow-hidden transition ${
                index === activeIndex
                  ? "border-white"
                  : "border-neutral-800 opacity-60 hover:opacity-100"
              }`}
            >
              <CarImage
                src={img}
                alt={`${alt} - miniatura ${index + 1}`}
                className="w-full h-full"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}