"use client";

import { Shader, LinearGradient, CursorTrail } from "shaders/react";

export default function ShaderBackdrop() {
  return (
    <div className="shader-backdrop" aria-hidden="true">
      <div className="shader-backdrop-fallback" />

      <Shader className="shader-backdrop-canvas">
        <LinearGradient
          colorA="#070b18"
          colorB="#34206f"
          angle={35}
        />

      </Shader>
    </div>
  );
}