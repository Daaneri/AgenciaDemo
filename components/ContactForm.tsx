"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // TODO: reemplazar por el envío real (API route + servicio de email, ej. Resend)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("sent");
    setNombre("");
    setEmail("");
    setMensaje("");
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-neutral-800 bg-neutral-900/50 p-10 text-center"
      >
        <p className="text-2xl font-bold tracking-tighter mb-3">
          Mensaje enviado
        </p>
        <p className="text-neutral-400 mb-8">
          Gracias por escribirnos. Un asesor te va a contactar a la brevedad.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 border border-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition duration-300"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
          Nombre
        </label>
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="w-full bg-black border border-neutral-700 p-4 outline-none focus:border-white transition"
        />
      </div>

      <div>
        <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full bg-black border border-neutral-700 p-4 outline-none focus:border-white transition"
        />
      </div>

      <div>
        <label className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">
          Mensaje
        </label>
        <textarea
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Contanos qué estás buscando..."
          rows={5}
          className="w-full bg-black border border-neutral-700 p-4 outline-none focus:border-white transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={status}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </motion.span>
        </AnimatePresence>
      </button>
    </form>
  );
}