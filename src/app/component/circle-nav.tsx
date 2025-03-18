"use client";
import { useOpen } from "../hooks/context";
import { ScrambleText } from "./ui/scrumble-text";

const CircleNav = () => {
  const { setIsOpen, isOpen } = useOpen();

  const handleOpen = (name: string) => {
    setIsOpen((prev) => ({
      name,
      open: prev.name === name ? !prev.open : true,
    }));
  };

  return (
    <div
      id="circle-nav"
      className="relative inline-block size-28 rounded-full border border-white before:rounded-full"
    >
      <ScrambleText
        text="INDEX"
        className="absolute -top-9 left-10 cursor-pointer text-sm font-extralight tracking-wider"
      />

      <ScrambleText
        text="WORK"
        className="absolute -left-12 top-1/2 cursor-pointer text-sm font-extralight tracking-wider"
      />

      <ScrambleText
        text="ABOUT"
        className="absolute -right-12 top-1/2 cursor-pointer text-sm font-extralight tracking-wider"
        onClick={() => handleOpen("about-card")}
      />

      <ScrambleText
        text="CONTACT"
        className="absolute -bottom-9 left-9 cursor-pointer text-sm font-extralight tracking-wider"
        onClick={() => handleOpen("about-card")}
      />
    </div>
  );
};

export default CircleNav;
