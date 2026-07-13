"use client";

import { motion } from "framer-motion";

interface FilterTagsProps {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}

export function FilterTags({ label, options, selected, onToggle }: FilterTagsProps) {
  if (options.length === 0) return null;

  return (
    <div>
      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-3">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const isActive = selected.includes(option);
          return (
            <button
              key={option}
              onClick={() => onToggle(option)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition duration-300 ${
                isActive
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "bg-transparent text-neutral-400 border-neutral-700 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ActiveChipsProps {
  chips: string[];
  onRemove: (value: string) => void;
  onClearAll: () => void;
}

export function ActiveChips({ chips, onRemove, onClearAll }: ActiveChipsProps) {
  if (chips.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-neutral-800 overflow-hidden"
    >
      {chips.map((chip) => (
        <motion.span
          key={chip}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex items-center gap-2 bg-black border border-cyan-400/40 pl-3 pr-2 py-1.5 text-xs uppercase tracking-widest text-cyan-400"
        >
          {chip}
          <button
            onClick={() => onRemove(chip)}
            aria-label={`Quitar filtro ${chip}`}
            className="text-cyan-400/60 hover:text-cyan-400"
          >
            ×
          </button>
        </motion.span>
      ))}
      <button
        onClick={onClearAll}
        className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white underline underline-offset-4 ml-2"
      >
        Limpiar todo
      </button>
    </motion.div>
  );
}