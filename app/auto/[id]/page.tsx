"use client";
import { useParams } from "next/navigation";
import { cars } from "@/lib/data";
import Navbar from "@/components/Navbar";
import CarGallery from "@/components/CarGallery";
import { motion } from "framer-motion";

export default function AutoDetalle() {
  const params = useParams();
  const auto = cars.find((c) => c.id.toString() === params.id);

  if (!auto) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>Auto no encontrado.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-20">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-10"
      >
        {/* Galería */}
        <CarGallery images={auto.images} alt={`${auto.brand} ${auto.model}`} />

        {/* Información */}
        <div>
          <h1 className="text-5xl font-bold tracking-tighter">{auto.brand} {auto.model}</h1>
          <p className="text-4xl mt-4 font-bold text-white">
            ${auto.price.toLocaleString("es-AR")}
          </p>

          <div className="mt-8 py-8 border-y border-neutral-800 space-y-4">
            <div className="flex justify-between text-neutral-400">
              <span>Año</span>
              <span className="text-white">{auto.year}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Kilometraje</span>
              <span className="text-white">{auto.km.toLocaleString("es-AR")} km</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Transmisión</span>
              <span className="text-white">{auto.transmission}</span>
            </div>
          </div>

          {/* Firma de asesor */}
          <div className="mt-10 p-6 border border-neutral-800 bg-neutral-900/50">
            <p className="text-sm text-neutral-400 mb-2">¿Dudas sobre este vehículo?</p>
            <p className="font-bold text-lg mb-4">Tu asesor de confianza te espera.</p>
            <a
              href={`https://wa.me/5493400000000?text=Hola,%20me%20interesa%20el%20${auto.brand}%20${auto.model}%20que%20vi%20en%20la%20web.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-black py-4 font-bold uppercase tracking-widest text-center hover:bg-neutral-200 transition"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}