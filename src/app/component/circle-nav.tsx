"use client";
import useHandleOpen from "../hooks/use-handle-open";
import AnimateInformationCard from "./ui/animated-information-card";
import { ScrambleText } from "./ui/scrumble-text";

const CircleNav = () => {
  const { handleOpen } = useHandleOpen();

  return (
    <div className="z-60 relative me-8 mt-10 h-auto w-auto">
      <span
        id="circle-nav"
        className="inline-block size-28 rounded-full border border-white before:rounded-full"
      ></span>
      <ScrambleText
        text="HOME"
        overdrive={32}
        tick={1}
        speed={0.9}
        className="z-70 absolute -top-6 left-1/2 -translate-x-1/2 cursor-pointer text-sm font-extralight tracking-wider"
      />

      <ScrambleText
        text="WORK"
        overdrive={32}
        tick={1}
        speed={0.9}
        className="z-70 absolute -left-8 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-extralight tracking-wider"
      />

      <ScrambleText
        text="ABOUT"
        overdrive={32}
        tick={1}
        speed={0.9}
        className="z-70 absolute -right-9 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-extralight tracking-wider"
        onClick={() => handleOpen("about-card")}
      />

      <ScrambleText
        text="CONTACT"
        overdrive={32}
        tick={1}
        speed={0.9}
        className="z-70 absolute -bottom-6 left-1/2 -translate-x-1/2 cursor-pointer text-sm font-extralight tracking-wider"
        onClick={() => handleOpen("contact-card")}
      />

      <AnimateInformationCard />
    </div>
  );
};

export default CircleNav;
