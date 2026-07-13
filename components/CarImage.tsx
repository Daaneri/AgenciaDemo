"use client";

import { useState } from "react";
import Image from "next/image";

interface CarImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export default function CarImage({ src, alt, className = "", sizes }: CarImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`bg-neutral-800 flex items-center justify-center text-neutral-600 italic ${className}`}>
        {alt}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-neutral-800 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}