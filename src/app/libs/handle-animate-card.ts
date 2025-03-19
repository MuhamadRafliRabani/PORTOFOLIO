"use client";
import { useEffect, useRef } from "react";
import { useOpen } from "../hooks/context";
import { useGSAP, gsap } from "./gsap-configure";

export const useAnimateCard = (container: React.RefObject<null>) => {
  const { isOpen } = useOpen();
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!isOpen?.name) return;

      const aboutCard = "#about-card";
      const contactCard = "#contact-card";

      if (!tl.current) {
        tl.current = gsap.timeline();
      }

      tl.current.clear();

      if (isOpen.open) {
        if (isOpen.name === "about-card") {
          tl.current
            .to(contactCard, {
              translateY: 200,
              translateX: 50,
              opacity: 0,
              duration: 0.5,
              ease: "power4.in",
            })
            .fromTo(
              aboutCard,
              { translateY: 200, translateX: 50, opacity: 0 },
              {
                translateY: 0,
                opacity: 1,
                duration: 0.8,
                ease: "back.inOut",
              },
              "-=0.3",
            );
        }

        if (isOpen.name === "contact-card") {
          tl.current
            .to(aboutCard, {
              translateY: 300,
              translateX: 50,
              opacity: 0,
              duration: 0.5,
              ease: "power4.in",
            })
            .fromTo(
              contactCard,
              {
                translateY: 300,
                translateX: 50,
                opacity: 0,
              },
              {
                translateY: -200,
                translateX: 0,
                opacity: 1,
                duration: 0.6,
                ease: "back.inOut",
              },
              "-=0.3",
            );
        }
      } else {
        // Jika Menutup Semua Kartu
        tl.current.to([aboutCard, contactCard], {
          translateY: 300,
          opacity: 0,
          duration: 0.8,
          ease: "power4.in",
        });
      }
    },
    { scope: container, dependencies: [isOpen.open, isOpen.name] },
  );
};
