"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;

    function step(timestamp: number) {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}