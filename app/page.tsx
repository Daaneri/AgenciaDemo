"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CarCardSkeleton from "@/components/CarCardSkeleton";
import CarImage from "@/components/CarImage";
import HeroBackground from "@/components/HeroBackground";
import ScrollIndicator from "@/components/ScrollIndicator";
import { FilterTags, ActiveChips } from "@/components/FilterTags";
import { cars } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import HeroStats from "@/components/HeroStats";

const heroWords = ["TROYA", "AUTOMOTORES"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const marcas = [
  "BMW",
  "Toyota",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Ford",
  "Chevrolet",
  "Honda",
];

function MarcasMarquee() {
  const items = [...marcas, ...marcas];

  return (
    <section className="py-16 border-t border-neutral-800 overflow-hidden">
      <h2 className="text-center text-sm uppercase tracking-widest text-neutral-500 mb-10">
        Marcas que representamos
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-6">
          {items.map((marca, i) => (
            <span
              key={`${marca}-${i}`}
              className="shrink-0 px-8 py-4 border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm font-semibold uppercase tracking-wide whitespace-nowrap"
            >
              {marca}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");
  const [fuelFilters, setFuelFilters] = useState<string[]>([]);
  const [transmissionFilters, setTransmissionFilters] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const fuelOptions = useMemo(
    () => Array.from(new Set(cars.map((c) => c.fuel))),
    []
  );
  const transmissionOptions = useMemo(
    () => Array.from(new Set(cars.map((c) => c.transmission))),
    []
  );

  const autosFiltrados = cars.filter((car) => {
    const matchesText =
      car.brand.toLowerCase().includes(marca.toLowerCase()) &&
      car.model.toLowerCase().includes(modelo.toLowerCase()) &&
      car.year.toString().includes(anio);

    const matchesFuel =
      fuelFilters.length === 0 || fuelFilters.includes(car.fuel);

    const matchesTransmission =
      transmissionFilters.length === 0 ||
      transmissionFilters.includes(car.transmission);

    return matchesText && matchesFuel && matchesTransmission;
  });

  function toggleFuel(value: string) {
    setFuelFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function toggleTransmission(value: string) {
    setTransmissionFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  function clearAllFilters() {
    setMarca("");
    setModelo("");
    setAnio("");
    setFuelFilters([]);
    setTransmissionFilters([]);
  }

  const activeChips = [...fuelFilters, ...transmissionFilters];

  function removeChip(value: string) {
    if (fuelFilters.includes(value)) toggleFuel(value);
    if (transmissionFilters.includes(value)) toggleTransmission(value);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <Navbar />

     {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        <HeroBackground />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 flex flex-wrap justify-center gap-x-3 md:gap-x-6 px-2">
            {heroWords.map((word) => (
              <motion.span key={word} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-cyan-400/80 font-light tracking-widest uppercase"
          >
            Confianza, transparencia y respaldo
          </motion.p>
        </motion.div>

        <HeroStats />

        <ScrollIndicator />
      </section>

      {/* SEARCH SECTION */}
      <section className="py-8 md:py-12 px-4 md:px-6 max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 -mt-16 md:-mt-24 relative z-20 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <input
            type="text"
            value={marca}
            placeholder="Filtrar por marca..."
            onChange={(e) => setMarca(e.target.value)}
            className="bg-black border border-neutral-700 p-4 outline-none focus:border-white transition"
          />
          <input
            type="text"
            value={modelo}
            placeholder="Modelo..."
            onChange={(e) => setModelo(e.target.value)}
            className="bg-black border border-neutral-700 p-4 outline-none focus:border-white transition"
          />
          <input
            type="text"
            value={anio}
            placeholder="Año..."
            onChange={(e) => setAnio(e.target.value)}
            className="bg-black border border-neutral-700 p-4 outline-none focus:border-white transition"
          />
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <FilterTags
            label="Combustible"
            options={fuelOptions}
            selected={fuelFilters}
            onToggle={toggleFuel}
          />
          <FilterTags
            label="Transmisión"
            options={transmissionOptions}
            selected={transmissionFilters}
            onToggle={toggleTransmission}
          />
        </div>

        <AnimatePresence>
          {activeChips.length > 0 && (
            <ActiveChips
              chips={activeChips}
              onRemove={removeChip}
              onClearAll={clearAllFilters}
            />
          )}
        </AnimatePresence>
      </section>

      {/* CATALOG SECTION */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-16 uppercase tracking-tighter text-center">Catálogo Actual</h2>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <CarCardSkeleton />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {autosFiltrados.length > 0 ? autosFiltrados.map((car) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={car.id}
                  className="bg-neutral-900 border border-neutral-800"
                >
                  <CarImage
                    src={car.images[0]}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{car.brand} {car.model}</h3>
                    <p className="text-3xl font-black mb-6">${car.price.toLocaleString("es-AR")}</p>
                    <Link href={`/auto/${car.id}`} className="block">
                      <button className="w-full py-4 border border-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
                        Ver Detalles
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-24 border border-dashed border-neutral-800"
                >
                  <p className="text-neutral-500 uppercase tracking-widest mb-6">
                    No hay vehículos con esos criterios.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-3 border border-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300"
                  >
                    Limpiar filtros
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* MARCAS SECTION - marquee infinito */}
      <MarcasMarquee />

      {/* CTA + FORMULARIO */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="text-white">¿Buscás tu</span>
              <br />
              <span className="text-cyan-400">próximo vehículo?</span>
            </h2>
            <p className="text-neutral-400 mt-6 leading-relaxed max-w-md">
              Completá el formulario y te contactamos con opciones a medida,
              financiación disponible o para coordinar una prueba de manejo.
              Respondemos en menos de 24hs.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Tu Nombre"
              className="bg-neutral-900 border border-neutral-800 p-4 outline-none focus:border-cyan-400 transition placeholder:text-neutral-500"
            />
            <input
              type="email"
              placeholder="Email o WhatsApp"
              className="bg-neutral-900 border border-neutral-800 p-4 outline-none focus:border-cyan-400 transition placeholder:text-neutral-500"
            />
            <textarea
              placeholder="Qué vehículo estás buscando"
              rows={4}
              className="bg-neutral-900 border border-neutral-800 p-4 outline-none focus:border-cyan-400 transition placeholder:text-neutral-500 resize-none"
            />
            <button
              type="submit"
              className="bg-cyan-400 text-black font-bold uppercase tracking-widest text-sm py-4 hover:bg-cyan-300 transition"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* HUMAN TOUCH SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 max-w-5xl mx-auto border-t border-neutral-800">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Confianza y Respaldo</h2>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Más que clientes, buscamos amigos que se lleven la tranquilidad de una elección bien hecha.
            </p>
          </div>
          <div className="relative h-56 md:h-64 overflow-hidden bg-neutral-900 border border-neutral-800">
            <Image
              src="/equipo.jpg"
              alt="Equipo de Troya Automotores"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_60px_40px_rgba(0,0,0,0.85)]" />
          </div>
        </div>
      </section>
    </main>
  );
}