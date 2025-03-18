"use client";
import React, { useRef } from "react";
import CardLayout from "../card-layout";
import Image from "next/image";
import { useGSAP, gsap } from "@/app/libs/gsap-configure";
import { useOpen } from "@/app/hooks/context";

const NavCircleAction = () => {
  const { isOpen } = useOpen();
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  console.log(isOpen.open);

  useGSAP(
    () => {
      if (!isOpen?.name) return;

      const targetId =
        isOpen.name === "about-card" ? "#about-card" : "#contact-card";

      if (!tl.current) {
        tl.current = gsap.timeline();
      }

      tl.current.clear();

      if (isOpen.open) {
        console.log("true dijalanin");
        tl.current
          .from(targetId, {
            translateY: 300,
            opacity: 0,
            duration: 0.8,
            ease: "back.inOut",
          })
          .to(targetId, {
            translateY: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power4.out",
          });
      } else {
        console.log("false dijalanin");

        tl.current.to(targetId, {
          translateY: 300,
          opacity: 0,
          duration: 0.8,
          ease: "power4.in",
        });
      }
    },
    { scope: container, dependencies: [isOpen.open, isOpen.name] }, // Pastikan dependencies tetap
  );

  return (
    <div className="h-fit w-fit" ref={container}>
      <div className="top-1/11 absolute right-5 h-fit overflow-hidden md:pe-1 md:ps-5 md:pt-5">
        <CardLayout id="about-card">
          <Image
            src="/profil.jpg"
            className="absolute -left-5 -top-5 z-40 size-16 rounded-full object-cover object-top"
            width={64}
            height={64}
            alt="PROFIL IMAGE"
          />
          <p className="pt-10 text-xs">MUHAMAD RAFLI RABANI</p>
          <div className="space-y-1.5 text-[10px] font-medium text-[#6d6d6d]">
            <p>Combining design expertise with Webflow development.</p>
            <p>
              Specialized in crafting experience-driven websites that stand out
              through bold design, seamless motion, and innovative
              functionality.
            </p>
            <p>
              Currently working as a freelancer on occasion and in-house at
              studio UNCOMMON [Enschede, NL].
            </p>
          </div>
        </CardLayout>
      </div>
    </div>
  );
};

export default NavCircleAction;
