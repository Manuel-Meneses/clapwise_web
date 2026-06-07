"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
}

export function AiParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generamos las partículas solo en el cliente
    const newParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // Tamaño entre 1px y 4px
      initialX: Math.random() * 100, // Posición % X
      initialY: Math.random() * 100, // Posición % Y
      duration: Math.random() * 5 + 5, // Duración de la oscilación (5-10s)
      delay: Math.random() * 2, // Retraso inicial
    }));
    
    setParticles(newParticles);
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full aspect-video bg-black/5 rounded-xl border border-white/10" />;

  return (
    <div className="relative w-full aspect-video rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      
      {/* El "Core" central al que las partículas le dan forma */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-48 h-48 bg-white/10 rounded-full blur-[60px] z-0"
      />

      {/* Partículas flotantes */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-white/70 rounded-full z-10 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.initialX}%`,
            top: `${p.initialY}%`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: (Math.random() - 0.5) * 100, // Nacen dispersas
            y: (Math.random() - 0.5) * 100 
          }}
          animate={{ 
            opacity: [0, 0.8, 0], 
            scale: [0, 1, 0],
            x: 0, // Convergen a su posición original
            y: 0 
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Un conector de red neuronal abstracto en el centro */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute w-32 h-32 opacity-30 z-10 stroke-white"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <motion.path
          d="M20,50 L50,20 L80,50 L50,80 Z"
          fill="none"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle cx="50" cy="20" r="2" fill="white" />
        <motion.circle cx="80" cy="50" r="2" fill="white" />
        <motion.circle cx="50" cy="80" r="2" fill="white" />
        <motion.circle cx="20" cy="50" r="2" fill="white" />
      </motion.svg>
    </div>
  );
}