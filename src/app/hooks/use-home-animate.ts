"use client";
import { useEffect } from "react";
import { gsap } from "@/app/libs/gsap-configure";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHomeAnimations = (
  appRef: React.RefObject<HTMLDivElement | null>,
  projectRef: React.RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (!appRef.current || !projectRef?.current) return;
    const ELEMENTS_TO_FADE = gsap.utils.toArray(".item");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: appRef.current,
        start: "top top",
        end: "+=600",
        pin: true,
        scrub: true,
        // markers: true, // aktifkan untuk debug
      },
    });

    // Fade out semua elemen yang perlu hilang
    timeline.to(
      ELEMENTS_TO_FADE,
      {
        scale: 0.95,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: {
          each: 0.2,
          from: "center",
        },
      },
      0,
    );

    timeline.to(
      "#black-hole",
      {
        opacity: 0.6,
        scale: 0.8,
        ease: "power2.inOut",
      },
      0,
    );

    timeline.to(
      ".globe",
      {
        x: -80,
        y: -25,
        opacity: 0.6,
        ease: "power2.inOut",
      },
      0,
    );

    // Project slide-in dari kiri
    timeline.to(
      projectRef.current,
      {
        x: -10,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      0.3,
    );

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [appRef, projectRef]);
};
