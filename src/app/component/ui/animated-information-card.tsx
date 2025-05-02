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
      className="-left-30 -top-85 min-w-70 h-78 absolute z-40 w-auto overflow-hidden"
    >
      <AboutCard />
      <ContactCard />
    </div>
  );
};

export default AnimateInformationCard;
