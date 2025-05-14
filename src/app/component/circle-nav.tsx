"use client";

import { useRef } from "react";
import AnimateInformationCard from "./ui/animated-information-card";
import { ScrambleText } from "./ui/scrumble-text";
import useHandleOpen from "../hooks/use-handle-open";
import { useHandleScrollToBottom } from "../hooks/useScrollByClick";

const CircleNav = () => {
  const { handleOpen, isOpen } = useHandleOpen();
  const rotateRef = useRef<HTMLSpanElement>(null);

  const rotateTo = (deg: number) => {
    if (rotateRef.current) {
      rotateRef.current.style.transform = `rotate(${deg}deg)`;
      rotateRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  };

  const navItems = [
    {
      text: "INDEX",
      position: "bottom-[95%] md:bottom-full left-1/2 -translate-x-1/2",
      angle: 360,
      action: () => window.location.reload(),
    },
    {
      text: "WORK",
      position: "right-[95%] md:right-full top-1/2 -translate-y-1/2",
      angle: 270,
      action: () => {
        useHandleScrollToBottom();
        if (isOpen.name === isOpen.name && isOpen.open) {
          handleOpen(isOpen.name);
        }
      },
    },
    {
      text: "ABOUT",
      position: "left-[95%]  md:left-full top-1/2 -translate-y-1/2",
      angle: 90,
      action: () => handleOpen("about-card"),
    },
    {
      text: "CONTACT",
      position: "top-[95%] left-1/2 top-full -translate-x-1/2",
      angle: 180,
      action: () => handleOpen("contact-card"),
    },
  ];

  return (
    <div
      style={{ transform: `translateY(300px)`, opacity: 0 }}
      className="item z-60 relative -mb-8 me-7 inline-block md:me-4"
    >
      {/* Lingkaran navigasi */}
      <span
        id="circle-nav"
        className="border-primary size-23 relative m-3.5 flex items-center justify-center rounded-full border md:size-28"
      >
        <span
          ref={rotateRef}
          className="size-10/11 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {/* DOT */}
          <span className="bg-primary absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full" />
        </span>
      </span>

      {/* ScrambleText Items */}
      {navItems.map(({ text, position, angle, action }) => (
        <ScrambleText
          key={text}
          text={text}
          overdrive={32}
          tick={1}
          speed={0.9}
          onClick={() => {
            rotateTo(angle);
            action();
          }}
          className={`absolute ${position} z-70 cursor-pointer text-sm font-extralight tracking-wider`}
        />
      ))}

      <AnimateInformationCard />
    </div>
  );
};

export default CircleNav;
