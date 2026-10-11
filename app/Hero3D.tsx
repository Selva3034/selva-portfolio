
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function OrbitalCore() {
  const core = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.x += delta * 0.12;
      core.current.rotation.y += delta * 0.2;
    }

    if (ring.current) {
      ring.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      ring.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.25}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.15, 2]} />
          <meshStandardMaterial
            color="#8972ff"
            metalness={0.75}
            roughness={0.2}
            wireframe
          />
        </mesh>

        <mesh scale={0.78}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#17152f"
            metalness={0.6}
            roughness={0.25}
            emissive="#4934a8"
            emissiveIntensity={0.65}
          />
        </mesh>
      </Float>

      <mesh ref={ring} rotation={[1.1, 0.3, 0.2]}>
        <torusGeometry args={[1.65, 0.008, 12, 120]} />
        <meshBasicMaterial color="#8b7aff" transparent opacity={0.8} />
      </mesh>

      <mesh rotation={[0.4, 0.8, 0.6]}>
        <torusGeometry args={[1.9, 0.004, 8, 120]} />
        <meshBasicMaterial color="#44dfff" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="relative mx-auto h-[350px] w-full max-w-[520px] sm:h-[440px] lg:h-[520px]">
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[85px] sm:h-80 sm:w-80" />

      <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-white/15 bg-[#111126]/80 shadow-[0_0_80px_rgba(124,92,255,0.2)] backdrop-blur-xl sm:h-40 sm:w-40">
        <span className="bg-gradient-to-br from-white via-violet-200 to-cyan-300 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent sm:text-6xl">
          SR
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={1.2} />
          <pointLight position={[3, 3, 4]} intensity={35} color="#9278ff" />
          <pointLight position={[-3, -2, 2]} intensity={18} color="#42dfff" />

          <OrbitalCore />

          <Sparkles
            count={70}
            scale={5}
            size={2}
            speed={0.25}
            color="#b8aaff"
          />
        </Canvas>
      </div>

      <div className="absolute left-0 top-[22%] z-20 rounded-xl border border-white/10 bg-[#10101d]/90 px-4 py-3 backdrop-blur-lg">
        <p className="text-[9px] tracking-widest text-zinc-500">CREATIVE</p>
        <p className="mt-1 text-xs font-medium text-violet-200">Developer</p>
      </div>

      <div className="absolute bottom-[22%] left-[8%] z-20 rounded-xl border border-white/10 bg-[#10101d]/90 px-4 py-3 backdrop-blur-lg">
        <p className="text-[9px] tracking-widest text-zinc-500">CURRENT FOCUS</p>
        <p className="mt-1 text-xs font-medium text-white">
          Design + Development
        </p>
      </div>

      <div className="absolute bottom-[12%] right-[3%] z-20 rounded-xl border border-white/10 bg-[#10101d]/90 px-4 py-3 backdrop-blur-lg">
        <p className="text-[9px] tracking-widest text-zinc-500">ALWAYS</p>
        <p className="mt-1 text-xs font-medium text-cyan-200">Learning</p>
      </div>

      <div className="absolute right-[12%] top-[20%] h-2 w-2 animate-pulse rounded-full bg-violet-300 shadow-[0_0_20px_#a78bfa]" />
      <div className="absolute bottom-[34%] right-[19%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
    </div>
  );
}
