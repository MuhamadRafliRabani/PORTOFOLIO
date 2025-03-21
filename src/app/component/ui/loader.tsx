"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrambleText } from "./scrumble-text";
import { Plus } from "lucide-react";

const MODES = [
  {
    name: "LIGHT",
    deg: -47,
    className: "-left-30 top-3/6 absolute -rotate-45",
  },
  { name: "DARK", deg: 0, className: "-top-10.5 absolute -left-2" },
  {
    name: "SPRING",
    deg: 48,
    className: "rotate-51 -right-34 absolute -bottom-11",
  },
];

export default function MoodSelector() {
  const [selectedMode, setSelectedMode] = useState(1);
  const knobRef = useRef<SVGSVGElement>(null);

  const rotationDeg = useMemo(() => MODES[selectedMode].deg, [selectedMode]);

  useEffect(() => {
    if (knobRef.current) {
      gsap.to(knobRef.current, {
        rotation: rotationDeg,
        duration: 0.9,
        ease: "back.out",
      });
    }
  }, [rotationDeg]);

  const handleClick = useCallback((index: number) => {
    setSelectedMode(index);
  }, []);

  return (
    <div className="z-90 fixed inset-0 flex min-h-screen items-center justify-center bg-[#161616]">
      <div className="grid-rows-[1fr 50px] z-60 relative grid h-fit w-full place-content-center gap-5">
        {/* Mode Selection */}
        <div className="absolute left-1/2 top-0 z-50">
          {MODES.map((mode, i) => (
            <button
              key={mode.name}
              className={`${mode.className} min-w-5 cursor-pointer tracking-wide transition-opacity ${
                selectedMode === i ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => handleClick(i)}
            >
              <span
                className={`mx-auto block size-2.5 rounded-full border ${
                  selectedMode === i
                    ? "border-none bg-red-500"
                    : "border-gray-500 bg-transparent"
                }`}
              />
              <ScrambleText
                text={mode.name}
                overdrive={32}
                tick={1}
                speed={0.9}
              />
            </button>
          ))}
        </div>

        <svg
          width="552"
          height="552"
          viewBox="0 0 552 552"
          fill="none"
          className="ms-2 size-60"
          xmlns="http://www.w3.org/2000/svg"
          ref={knobRef}
        >
          <g id="Clock_body">
            <rect
              x="0.778"
              y="0.778"
              width="550.722"
              height="550.722"
              rx="275.361"
              stroke="#DEDEDE"
            />
            <g id="Hours">
              {[
                { transform: "translate(116.832 134.88) rotate(129)" },
                { transform: "translate(68.6876 267.688) rotate(90)" },
                { transform: "translate(113.093 423.266) rotate(50)" },
                { transform: "translate(279 487)" },
                { transform: "translate(448.173 422.637) rotate(-51)" },
                { transform: "translate(488.688 283.688) rotate(-90)" },
                { transform: "translate(448.299 139.251) rotate(-128)" },
              ].map((props, idx) => (
                <rect
                  key={idx}
                  width="4"
                  height="30"
                  {...props}
                  fill="#DEDEDE"
                />
              ))}
              <path
                d="M282.5 53L296.789 81.5H268.211L282.5 53Z"
                fill="#D9D9D9"
              />
              <path
                opacity="0.8"
                d="M279.714 266.714V259H282.286V266.714H290V269.286H282.286V277H279.714V269.286H272V266.714H279.714Z"
                fill="#DEDEDE"
              />
            </g>
          </g>
        </svg>

        <ScrambleText
          overdrive={32}
          tick={1}
          speed={1}
          text="SET THE MOOD THAT MATCHES WITH YOUR VIBE"
          className="min-w-3xs tracking-wider"
        />

        <button className="bg-second text-primary mx-auto my-auto flex h-8 w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full py-1 pe-2 ps-4 text-[15px]/[7px] font-medium tracking-wide">
          <ScrambleText
            overdrive={32}
            tick={1}
            speed={1}
            text="SET MOOD"
            className="tracking-wider"
          />
          <span className="flex size-fit rounded-full bg-red-400">
            <Plus />
          </span>
        </button>

        <div className="bg-dots h-35 absolute inset-x-0 -bottom-32 -z-10 w-full"></div>
      </div>
    </div>
  );
}
