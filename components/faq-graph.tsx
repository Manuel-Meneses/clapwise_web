"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line, Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, User } from "lucide-react";

// Ampliamos a 8 Preguntas Frecuentes Clave para B2B
const faqs = [
  {
    id: 0,
    q: "¿El bot puede inventar precios o vender algo sin stock?",
    a: "No. Utilizamos una arquitectura híbrida determinista. El agente está obligado a consultar el inventario en tiempo real antes de responder; si el stock es cero, la transacción se bloquea.",
    pos: [-3.5, 1.5, 0] as [number, number, number],
  },
  {
    id: 1,
    q: "¿Tengo que armar un Excel perfecto para empezar a usarlo?",
    a: "Para nada, garantizamos 'fricción cero'. Podés enviarnos tu catálogo en un PDF, listas desordenadas o audios caóticos. Nuestro pipeline limpia y vectoriza la información automáticamente.",
    pos: [3.5, 2, -1.5] as [number, number, number],
  },
  {
    id: 2,
    q: "¿Cómo funciona el modelo de cobro?",
    a: "Operamos con un modelo B2B SaaS híbrido. Cobramos un 'Setup Fee' por única vez por la configuración inicial, y luego una suscripción mensual fija (MRR) por el servicio de la IA.",
    pos: [-2, -2.5, 2.5] as [number, number, number],
  },
  {
    id: 3,
    q: "¿Mis clientes se van a dar cuenta de que hablan con un bot?",
    a: "Tienen empatía comercial e hiper-localización. Si detectan alta complejidad o una queja, derivan la conversación a un operador humano sin perder el contexto.",
    pos: [2.5, -2.5, 1.5] as [number, number, number],
  },
  {
    id: 4,
    q: "¿Con qué plataformas de e-commerce se integra?",
    a: "Nos conectamos de forma nativa con Tiendanube, Shopify y WooCommerce. Además, contamos con una API abierta para integraciones personalizadas (custom builds).",
    pos: [0, 3.5, 1.5] as [number, number, number],
  },
  {
    id: 5,
    q: "¿Cuánto tiempo tardan en dejar el agente listo para vender?",
    a: "Desde que nos das acceso a tu información y catálogo, el proceso de limpieza de datos, entrenamiento del modelo y despliegue toma entre 48 y 72 horas hábiles.",
    pos: [0, -3.5, -1.5] as [number, number, number],
  },
  {
    id: 6,
    q: "¿El agente entiende audios o notas de voz de WhatsApp?",
    a: "Sí, nuestra infraestructura procesa audio en milisegundos. Transcribe la nota de voz del cliente, comprende la intención de compra y responde instantáneamente.",
    pos: [-3.5, -0.5, -2.5] as [number, number, number],
  },
  {
    id: 7,
    q: "¿Qué sucede con la privacidad de los datos de mis clientes?",
    a: "Tu base de datos está completamente aislada (arquitectura de silos). Nunca utilizamos las conversaciones de tu negocio para entrenar modelos públicos externos.",
    pos: [3.5, 0.5, 2.5] as [number, number, number],
  },
];

// Conectar todos los nodos (Grafo neuronal denso)
const connections = [];
for (let i = 0; i < faqs.length; i++) {
  for (let j = i + 1; j < faqs.length; j++) {
    // Para que no se vea una maraña gigante, solo conectamos si la distancia es menor a X
    const dist = new THREE.Vector3(...faqs[i].pos).distanceTo(new THREE.Vector3(...faqs[j].pos));
    if (dist < 6.5) { 
      connections.push([faqs[i].pos, faqs[j].pos]);
    }
  }
}

function TechNode({ faq, isActive, isHovered, onClick, onPointerOver, onPointerOut, onClose }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const count = 1500; 
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 0.4 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    // Rotación de cada nodo reducida para que se sienta más calmo
    pointsRef.current.rotation.y += isActive ? 0.01 : 0.003;
    pointsRef.current.rotation.x += isActive ? 0.01 : 0.003;
    
    const targetScale = isActive ? 1.4 : (isHovered ? 1.2 : 1.0);
    pointsRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
  });

  return (
    <group position={faq.pos}>
      <mesh 
        onClick={onClick} 
        onPointerOver={onPointerOver} 
        onPointerOut={onPointerOut} 
        visible={false}
      >
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshBasicMaterial />
      </mesh>
      
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color={isActive ? "#427AA1" : isHovered ? "#192832" : "#9CA3AF"}
          size={isActive ? 0.035 : 0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Ventana de Chat */}
      {isActive && (
        <Html position={[0.5, 0, 0]} center zIndexRange={[100, 0]}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10 }}
              className="w-[300px] md:w-[360px] bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-5 flex flex-col gap-4 font-['Manrope',sans-serif] ml-12 md:ml-28"
            >
              {/* Header con botón X recuperado */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="bg-[#427AA1]/10 p-1.5 rounded-full">
                    <Bot className="w-5 h-5 text-[#427AA1]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#192832] text-sm leading-none">Agente ClapWise</p>
                    <p className="text-[10px] text-green-600 font-medium mt-1">Conectado a DB</p>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Pregunta */}
              <div className="flex gap-2 justify-end">
                <div className="bg-[#192832] text-white p-3 rounded-2xl rounded-tr-sm max-w-[90%] text-sm shadow-sm leading-relaxed">
                  {faq.q}
                </div>
              </div>

              {/* Respuesta */}
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-[#427AA1] flex items-center justify-center shrink-0 mt-auto">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-tl-sm max-w-[90%] text-sm shadow-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Html>
      )}

      {/* Tooltip flotante */}
      {!isActive && (
        <Html position={[0, -0.6, 0]} center zIndexRange={[50, 0]}>
          <div 
            className={`px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-bold whitespace-nowrap shadow-sm border transition-all duration-300 ${isHovered ? 'border-[#427AA1] text-[#427AA1] scale-110' : 'border-transparent text-gray-400'}`}
            style={{ pointerEvents: 'none' }}
          >
            {isHovered ? "Consultar nodo" : "Sinapsis"}
          </div>
        </Html>
      )}
    </group>
  );
}

function GraphScene() {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useFrame((state) => {
    if (!controlsRef.current || !groupRef.current) return;

    // Animación global SUAVIZADA (menor amplitud y menor velocidad)
    if (activeNode === null) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 0.3) * 0.15; 
    } else {
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, 0.05);
    }

    // Cámara y enfoque
    if (activeNode !== null) {
      const targetNode = faqs.find((f) => f.id === activeNode);
      if (targetNode) {
        const nodePos = new THREE.Vector3(...targetNode.pos);
        // Ajustamos la cámara para un plano más amplio y cómodo
        const desiredCamPos = nodePos.clone().add(new THREE.Vector3(-1.8, 0, 4.5));
        
        camera.position.lerp(desiredCamPos, 0.04); 
        controlsRef.current.target.lerp(nodePos, 0.04); 
      }
    } else {
      camera.position.lerp(new THREE.Vector3(0, 0, 11), 0.03); // Alejado un poco más para ver los 8 nodos
      controlsRef.current.target.lerp(new THREE.Vector3(0, 0, 0), 0.03);
    }
    controlsRef.current.update();
  });

  return (
    <>
      <OrbitControls 
        ref={controlsRef} 
        enablePan={false} 
        enableZoom={false} 
        makeDefault 
        autoRotate={activeNode === null} 
        autoRotateSpeed={0.3} // Rotación automática más elegante y lenta
      />
      
      <group ref={groupRef}>
        {connections.map((points, idx) => (
          <Line
            key={`line-${idx}`}
            points={points}
            color="#D1D5DB"
            lineWidth={0.8} // Líneas más sutiles para no ensuciar con 8 nodos
            transparent
            opacity={0.25}
          />
        ))}

        {faqs.map((faq) => (
          <TechNode 
            key={faq.id}
            faq={faq}
            isActive={activeNode === faq.id}
            isHovered={hoveredNode === faq.id}
            onClick={(e) => { e.stopPropagation(); setActiveNode(activeNode === faq.id ? null : faq.id); }}
            onClose={(e) => { e.stopPropagation(); setActiveNode(null); }} // Prop para el botón X
            onPointerOver={(e) => { e.stopPropagation(); setHoveredNode(faq.id); document.body.style.cursor = 'pointer'; }}
            onPointerOut={(e) => { e.stopPropagation(); setHoveredNode(null); document.body.style.cursor = 'default'; }}
          />
        ))}
      </group>
    </>
  );
}

export function FaqGraphCanvas() {
  return (
    <div className="w-full h-[700px] md:h-[800px] relative z-20 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 11], fov: 45 }}>
        <GraphScene />
      </Canvas>
    </div>
  );
}