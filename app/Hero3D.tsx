
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function GlassOrb() {
  const outer = useRef<Group>(null);
  const inner = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (outer.current) {
      outer.current.rotation.y += delta * 0.16;
      outer.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
    }

    if (inner.current) {
      inner.current.rotation.y -= delta * 0.2;
      inner.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <group>
      <Float speed={1.1} floatIntensity={0.2} rotationIntensity={0.12}>
        <group ref={outer}>
          <mesh>
            <torusGeometry args={[1.35, 0.13, 24, 120]} />
            <meshPhysicalMaterial
              color="#c3b5ff"
              metalness={0.95}
              roughness={0.12}
              clearcoat={1}
              clearcoatRoughness={0.08}
              emissive="#5020ff"
              emissiveIntensity={0.7}
            />
          </mesh>

          <mesh rotation={[1.1, 0.7, 0.4]}>
            <torusGeometry args={[1.08, 0.09, 20, 120]} />
            <meshPhysicalMaterial
              color="#53e7ff"
              metalness={0.9}
              roughness={0.15}
              clearcoat={1}
              emissive="#3420ff"
              emissiveIntensity={0.9}
            />
          </mesh>

          <mesh rotation={[0.7, 0.2, 1.2]}>
            <torusGeometry args={[0.82, 0.07, 20, 120]} />
            <meshPhysicalMaterial
              color="#f2edff"
              metalness={1}
              roughness={0.12}
              clearcoat={1}
              emissive="#8c56ff"
              emissiveIntensity={0.65}
            />
          </mesh>
        </group>

        <mesh ref={inner} scale={0.65}>
          <icosahedronGeometry args={[1, 2]} />
          <meshPhysicalMaterial
            color="#5130d8"
            metalness={0.85}
            roughness={0.18}
            wireframe
            emissive="#6b35ff"
            emissiveIntensity={1}
          />
        </mesh>

        <mesh scale={0.36}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#17113f"
            emissive="#4f20ff"
            emissiveIntensity={1.6}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Sparkles
        count={100}
        scale={4.8}
        size={2.4}
        speed={0.4}
        color="#bca9ff"
      />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[650px] sm:h-[500px] lg:h-[590px]">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[90px] sm:h-96 sm:w-96" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20 sm:h-80 sm:w-80" />

      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.4} />
        <pointLight position={[2, 3, 4]} intensity={65} color="#9c6cff" />
        <pointLight position={[-3, -2, 2]} intensity={45} color="#24dfff" />
        <pointLight position={[0, 1, -3]} intensity={30} color="#ff6bff" />
        <GlassOrb />
      </Canvas>

      <div className="absolute left-[1%] top-[22%] rounded-xl border border-white/10 bg-[#10101d]/90 px-4 py-3 backdrop-blur-xl">
        <p className="text-[9px] tracking-widest text-zinc-500">CREATIVE</p>
        <p className="mt-1 text-xs font-medium text-violet-200">Developer</p>
      </div>

      <div className="absolute bottom-[22%] left-[3%] rounded-xl border border-white/10 bg-[#10101d]/90 px-4 py-3 backdrop-blur-xl">
        <p className="text-[9px] tracking-widest text-zinc-500">CURRENT FOCUS</p>
        <p className="mt-1 text-xs font-medium text-white">
          Design + Development
        </p>
      </div>

      <div className="absolute bottom-[14%] right-[2%] rounded-xl border border-white/10 bg-[#10101d]/90 px-4 py-3 backdrop-blur-xl">
        <p className="text-[9px] tracking-widest text-zinc-500">ALWAYS</p>
        <p className="mt-1 text-xs font-medium text-cyan-200">Learning</p>
      </div>

      <div className="absolute right-[13%] top-[16%] h-2 w-2 animate-pulse rounded-full bg-violet-300 shadow-[0_0_25px_#a78bfa]" />
      <div className="absolute bottom-[33%] right-[12%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_25px_#67e8f9]" />
    </div>
  );
}
