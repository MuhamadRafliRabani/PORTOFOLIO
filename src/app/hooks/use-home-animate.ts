"use client";
import { useEffect } from "react";
import { gsap } from "@/app/libs/gsap-configure";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHomeAnimations = (
  appRef: React.RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (!appRef.current) return;

    gsap.to(appRef.current, {
      scrollTrigger: {
        trigger: appRef.current,
        start: "top top",
        end: "+=350",
        pin: true,
      },
    });

    gsap.to(".app", {
      scale: 0.95,
      opacity: 0,
      display: "none",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".app",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".navbar", {
      scale: 0.95,
      opacity: 0,
      display: "none",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".app",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill()); // Hapus animasi saat komponen unmount
  }, [appRef]);
};
