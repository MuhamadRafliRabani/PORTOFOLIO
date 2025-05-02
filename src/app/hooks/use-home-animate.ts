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

    gsap.to(".item", {
      scale: 0.95,
      opacity: 0.9,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".app",
        start: "top 5%",
        end: "bottom 75%",
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
        start: "top 5%",
        end: "bottom 75%",
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill()); // Hapus animasi saat komponen unmount
  }, [appRef]);
};
