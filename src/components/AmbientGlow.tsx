"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AmbientGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 40, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* SVG Grain Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-30"
        aria-hidden="true"
      />

      {/* Dynamic Cursor-following Glow */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 hidden md:block"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(201, 138, 94, 0.045) 0%, rgba(201, 138, 94, 0.015) 45%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Static subtle ambient backlight for top of page */}
      <div
        className="fixed top-[-10vw] left-1/2 -translate-x-1/2 w-[70vw] h-[35vw] rounded-full pointer-events-none z-0 blur-[130px] opacity-25 bg-[radial-gradient(ellipse_at_center,rgba(201,138,94,0.12),transparent_70%)]"
        aria-hidden="true"
      />
    </>
  );
}

