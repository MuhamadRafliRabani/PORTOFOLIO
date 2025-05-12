// components/ui/FloatingTooltip.tsx
"use client";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { tooltipsText, tooltipsVisisble } from "@/app/hooks/context";

const FloatingTooltip = () => {
  const [content] = useAtom(tooltipsText);
  const [visible] = useAtom(tooltipsVisisble);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });

  console.log("FloatingTooltip", content, visible);

  const handleMouseMove = (e: MouseEvent) => {
    pos.current = { x: e.clientX + 15, y: e.clientY + 15 };
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animateLoop = () => {
      if (tooltipRef.current) {
        gsap.to(tooltipRef.current, {
          x: pos.current.x,
          y: pos.current.y,
          duration: 0.3,
          ease: "power3.out",
        });
      }
      animationFrame = requestAnimationFrame(animateLoop);
    };

    animateLoop();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={tooltipRef}
      className={`pointer-events-none fixed z-[9999] rounded bg-black px-2 py-1 text-xs text-white transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {content}
    </div>
  );
};

export default FloatingTooltip;
