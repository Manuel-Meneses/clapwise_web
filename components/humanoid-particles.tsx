"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function HumanoidCloud() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Aumentamos a 20000 para soportar la densidad de los detalles faciales
  const count = 20000; 
  
  const { initialPositions, targetPositions } = useMemo(() => {
    const init = new Float32Array(count * 3);
    const target = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x = 0, y = 0, z = 0;
      const part = Math.random();

      // ==========================================
      // 1. CABEZA BASE Y ESCULPIDO DE MANDÍBULA (20%)
      // ==========================================
      if (part < 0.20) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = 0.5 * Math.cbrt(Math.random());
        
        let hx = r * 0.85 * Math.sin(phi) * Math.cos(theta);
        let hy = r * 1.1 * Math.cos(phi);
        let hz = r * 0.95 * Math.sin(phi) * Math.sin(theta); 
        
        const isFront = hz > 0;

        if (isFront) {
          // ESCULPIDO: Mandíbula y Mentón
          if (hy < -0.05) {
            // Aplanar mejillas y proyectar mentón hacia adelante y abajo
            hx *= 0.75 + (hy + 0.1); 
            hz += Math.abs(hy) * 0.6; // Mentón prominente
          }
          // ESCULPIDO: Cuencas de los ojos (Hundimiento)
          if (hy > 0.0 && hy < 0.15 && Math.abs(hx) > 0.08 && Math.abs(hx) < 0.25) {
            hz -= 0.08; 
          }
        } else {
          // Aplanar ligeramente la nuca
          hz *= 0.9;
        }

        x = hx;
        y = 2.6 + hy;
        z = hz;

      // ==========================================
      // 2. DETALLES FACIALES DE ALTA DENSIDAD (7%)
      // ==========================================
      } else if (part < 0.27) {
        const detail = Math.random();
        
        if (detail < 0.4) {
          // NARIZ: Cuña/Pirámide central
          const ny = (Math.random() - 0.5) * 0.3; // -0.15 a 0.15
          const nx = (Math.random() - 0.5) * 0.08; // Estrecha en X
          // La nariz sobresale más en la punta (abajo) que en el puente (arriba)
          const protrusion = 0.35 + (0.15 - ny) * 0.8 * Math.random();
          
          x = nx;
          y = 2.6 + ny;
          z = protrusion;

        } else if (detail < 0.7) {
          // CEJAS / ARCO SUPERCILIAR
          const side = Math.random() > 0.5 ? 1 : -1;
          const nx = side * (0.08 + Math.random() * 0.2); // Separadas del centro
          const ny = 0.15 + Math.random() * 0.05;
          const nz = 0.4 + Math.random() * 0.06; // Protuberancia sobre los ojos
          
          x = nx;
          y = 2.6 + ny;
          z = nz;

        } else {
          // OREJAS: Elipsoides alargados en los laterales
          const side = Math.random() > 0.5 ? 1 : -1;
          const ny = (Math.random() - 0.5) * 0.25; 
          const nz = (Math.random() - 0.5) * 0.1 - 0.05; // Ligeramente hacia atrás
          const nx = side * (0.42 + Math.random() * 0.06); // Empujadas hacia afuera
          
          x = nx;
          y = 2.6 + ny;
          z = nz;
        }

      // ==========================================
      // 3. CUELLO Y CLAVÍCULAS (8%)
      // ==========================================
      } else if (part < 0.35) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.16 + Math.random() * 0.08; 
        
        x = Math.cos(angle) * radius;
        y = 1.9 + Math.random() * 0.6; // Tramo del cuello
        z = Math.sin(angle) * radius;

        // Base del cuello que se abre hacia las clavículas
        if (y < 2.1) {
          x *= 1.0 + (2.1 - y) * 2; 
        }

      // ==========================================
      // 4. MITAD SUPERIOR DEL TORSO (65%)
      // ==========================================
      } else {
        const yNorm = Math.random(); 
        
        // MODIFICACIÓN: Rango Y cortado a la mitad del torso
        // Empieza en Y: -0.2 (debajo de pectorales) y va hasta 1.9 (hombros)
        y = -0.2 + yNorm * 2.1;      

        // El ancho mínimo ahora es mayor porque no bajamos hasta la cintura
        const maxWidth = 1.7;
        const minWidth = 1.2; 
        let width = minWidth + (maxWidth - minWidth) * Math.pow(yNorm, 0.7);

        // Curva de caída para los hombros (trapecios)
        if (y > 1.4) {
          width -= (y - 1.4) * 1.2; 
        }

        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * width;

        x = Math.cos(angle) * radius;
        
        // Profundidad de la caja torácica (pecho)
        let depth = 0.45 + (yNorm * 0.25);
        z = Math.sin(angle) * depth;

        // Aplanar espalda y frente, y dar volumen a pectorales
        const isFront = Math.sin(angle) > 0;
        if (isFront) {
          // Volumen pectoral extra en el tren superior
          if (y > 0.4 && y < 1.3) {
            z += Math.sin(((y - 0.4) / 0.9) * Math.PI) * 0.12; 
          }
        } else {
          z *= 0.55; // Espalda plana
        }
      }

      target[i * 3] = x;
      target[i * 3 + 1] = y - 1.2;
      target[i * 3 + 2] = z;

      // Efecto cinemático de entrada desde las esquinas
      init[i * 3] = Math.random() > 0.5 ? 25 + Math.random() * 15 : -25 - Math.random() * 15;
      init[i * 3 + 1] = (Math.random() - 0.5) * 20;
      init[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    return { initialPositions: init, targetPositions: target };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      positions[ix] = THREE.MathUtils.lerp(positions[ix], targetPositions[ix], 0.02);
      positions[ix + 1] = THREE.MathUtils.lerp(positions[ix + 1], targetPositions[ix + 1], 0.02);
      positions[ix + 2] = THREE.MathUtils.lerp(positions[ix + 2], targetPositions[ix + 2], 0.02);
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Rotación acotada para apreciar los rasgos faciales
    const targetRotationY = (state.pointer.x * Math.PI) / 3.5;
    const targetRotationX = -(state.pointer.y * Math.PI) / 10; 
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotationY, 0.05);
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotationX, 0.05);
  });

  return (
    <Points ref={pointsRef} positions={initialPositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#111111" 
        size={0.022} // Ajustado para equilibrar densidad y definición
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

export function HumanoidCanvas() {
  return (
    <div className="w-full h-[600px] relative cursor-pointer bg-neutral-100">
      <Canvas camera={{ position: [0, 1.2, 7.5], fov: 45 }}>
        <HumanoidCloud />
      </Canvas>
    </div>
  );
}