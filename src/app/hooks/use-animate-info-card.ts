"use client";
import { useRef } from "react";
import { useGSAP, gsap } from "../libs/gsap-configure";
import { useAtom } from "jotai";
import { openCard } from "./context";

export const useAnimateCard = (container: React.RefObject<null>) => {
  const [isOpen] = useAtom(openCard);
  console.log("🚀 ~ useAnimateCard ~ isOpen:", isOpen);
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
              display: "block",
              duration: 0.65,
              ease: "power4.inOut",
            })
            .to(
              aboutCard,
              {
                translateY: 0,
                opacity: 1,
                duration: 0.65,
                display: "block",
                ease: "power4.inOut",
              },
              "-=0.3",
            );
        }

        if (isOpen.name === "contact-card") {
          tl.current
            .to(aboutCard, {
              translateY: 200,
              display: "block",
              opacity: 0,
              duration: 0.65,
              ease: "power4.inOut",
            })
            .to(
              contactCard,
              {
                translateY: -200,
                display: "block",
                opacity: 1,
                duration: 0.65,
                ease: "power4.inOut",
              },
              "-=0.3",
            );
        }
      } else {
        // Jika Menutup Semua Kartu
        tl.current.to([aboutCard, contactCard], {
          translateY: 200,
          display: "none",
          opacity: 0,
          duration: 0.8,
          ease: "power4.inOut",
        });
      }
    },
    { scope: container, dependencies: [isOpen.open, isOpen.name] },
  );
};
