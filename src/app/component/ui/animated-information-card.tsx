"use client";
import { useRef } from "react";
import AboutCard from "../about-card";
import ContactCard from "../contact-card";
import { useAnimateCard } from "@/app/hooks/use-animate-info-card";

const AnimateInformationCard = () => {
  const container = useRef(null);
  useAnimateCard(container);

  return (
    <div
      ref={container}
      className="h-77 z-90 -top-90 absolute right-4 w-fit max-w-80 overflow-hidden md:pe-1 md:ps-5 md:pt-5"
    >
      <AboutCard />
      <ContactCard />
    </div>
  );
};

export default AnimateInformationCard;
