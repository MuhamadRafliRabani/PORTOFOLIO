"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CircleLoader = () => {
  const circleRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animation = gsap.to(circleRef.current, {
      strokeDasharray: "100, 100",
      duration: 2,
      ease: "power3.out",
      paused: true,
      onUpdate: () => {
        setProgress(Math.round(animation.progress() * 100));
      },
      onComplete: () => {
        gsap.to(circleRef.current, {
          strokeDasharray: "100, 0",
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });

    const interval = setInterval(() => {
      if (animation.progress() < 1) {
        animation.play();
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#4CAF50"
          strokeWidth="5"
          strokeDasharray="0, 100"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-4 text-lg font-semibold">{progress}%</p>
    </div>
  );
};

export default CircleLoader;
