"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  blur: number;
  opacity: number;
}

export function BlackParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generamos partículas de distintos tamaños y niveles de desenfoque
    // para dar un efecto Parallax (algunas cerca de la pantalla, otras lejos)
    const newParticles = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, // Entre 2px y 8px
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 15, // Movimiento muy suave y lento (15-30 seg)
      delay: Math.random() * 5,
      blur: Math.random() > 0.5 ? Math.random() * 3 : 0, // Algunas desenfocadas
      opacity: Math.random() * 0.4 + 0.1, // Opacidad baja para no tapar el texto
    }));
    
    setParticles(newParticles);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // pointer-events-none es CLAVE para que no bloqueen los clics del usuario
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-black"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            filter: `blur(${p.blur}px)`,
            opacity: p.opacity,
          }}
          animate={{
            // Flotan de forma errática pero suave
            y: [
              `${p.y}%`, 
              `${p.y - (Math.random() * 15 + 5)}%`, 
              `${p.y + (Math.random() * 10)}%`, 
              `${p.y}%`
            ],
            x: [
              `${p.x}%`, 
              `${p.x + (Math.random() * 10 - 5)}%`, 
              `${p.x}%`
            ],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}