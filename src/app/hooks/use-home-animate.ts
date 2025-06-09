"use client";
import { useEffect } from "react";
import { gsap } from "@/app/libs/gsap-configure";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useOpenPorto,
  useReveleAnimateCondion,
} from "./use-revele-animate-condion";

gsap.registerPlugin(ScrollTrigger);

export const useHomeAnimations = (
  appRef: React.RefObject<HTMLDivElement | null>,
  projectRef: React.RefObject<HTMLDivElement | null>,
) => {
  const { status } = useReveleAnimateCondion();
  const { open } = useOpenPorto();

  useEffect(() => {
    if (!status) return;
    if (!appRef.current || !projectRef?.current) return;

    const item = gsap.utils.toArray<HTMLElement>(".item");
    const navbar = item.find((el) => el.classList.contains("navbar"));
    const ELEMENTS_TO_FADE = item.filter(
      (el) => !el.classList.contains("navbar"),
    );

    const mm = gsap.matchMedia();

    // =======================
    // MOBILE (max-width: 768px)
    // =======================
    mm.add("(max-width: 768px)", () => {
      const tl = gsap.timeline();

      if (open) {
        // Animasi saat open = true
        tl.fromTo(
          ELEMENTS_TO_FADE,
          {
            y: 0,
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 0.5,
            ease: "sine.out",
            zIndex: -5,
            stagger: {
              each: 0.5,
              from: "center",
            },
          },
          0,
        );

        tl.to(
          projectRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "sine.out",
          },
          0.1,
        );
      } else {
        // Animasi saat open = false (reset ke kondisi awal)
        tl.fromTo(
          ELEMENTS_TO_FADE,
          {
            opacity: 1,
            zIndex: -5,
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "sine.out",
            zIndex: 5,
            stagger: {
              each: 0.2,
              from: "center",
            },
          },
          0,
        );

        tl.to(
          projectRef.current,
          {
            x: 1500,
            opacity: 0,
            duration: 0.8,
            ease: "sine.out",
          },
          0.1,
        );
      }
    });

    // =======================
    // TABLET (769px - 1024px)
    // =======================
    mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: appRef.current,
          start: "top top",
          end: "+=600",
          pin: true,
          scrub: true,
        },
      });

      if (navbar) {
        tl.fromTo(
          navbar,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -300,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.8,
          },
          0,
        );
      }

      tl.fromTo(
        ELEMENTS_TO_FADE,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 200,
          opacity: 0,
          zIndex: 10,
          duration: 0.5,
          ease: "power3.out",
          stagger: {
            each: 0.5,
            from: "center",
          },
        },
        0,
      );
      tl.to(
        "#black-hole",
        {
          scale: 1.2,
          opacity: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        ".globe",
        {
          y: -20,
          opacity: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        projectRef.current,
        {
          x: -5,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0.3,
      );
    });

    // =======================
    // DESKTOP (min-width: 1025px)
    // =======================
    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: appRef.current,
          start: "top top",
          end: "+=600",
          pin: true,
          scrub: true,
        },
      });
      if (navbar) {
        tl.fromTo(
          navbar,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -300,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.8,
          },
          0,
        );
      }

      tl.fromTo(
        ELEMENTS_TO_FADE,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: 200,
          opacity: 0,
          zIndex: 10,
          duration: 0.5,
          ease: "sine.out",
          stagger: {
            each: 0.3,
            from: "end",
          },
        },
        0,
      );

      tl.to(
        "#black-hole",
        {
          opacity: 0.6,
          scale: 1,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        ".globe",
        {
          y: -25,
          opacity: 0.6,
          ease: "power2.inOut",
        },
        0,
      );

      tl.to(
        projectRef.current,
        {
          x: -10,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        0,
      );
    });

    // Cleanup on unmount
    return () => {
      mm.kill(); // bunuh semua media query listeners & ScrollTrigger
    };
  }, [appRef, projectRef, status, open]);
};
