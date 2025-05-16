"use client";
import { useEffect, useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrambleText } from "./scrumble-text";
import { Plus } from "lucide-react";
import { DataTheme } from "@/app/data/theme";
import { useHandleTheme } from "@/app/hooks/use-handle-theme";
import { useHandleMood } from "@/app/hooks/use-handle-mood";
import { themeOption } from "@/app/libs/Index";
import { useReveleAnimate } from "@/app/hooks/use-revele-animate";

export default function MoodSelector() {
  const { theme, setHandleTheme } = useHandleTheme();
  const { handleMoodChange, mood } = useHandleMood();
  const svgRef = useRef<SVGSVGElement>(null);
  const knobRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  useReveleAnimate(circleRef, knobRef);

  const dataTheme = useMemo(
    () => DataTheme.find((item) => item.name === theme),
    [theme],
  );

  useEffect(() => {
    if (knobRef.current && dataTheme !== null) {
      gsap.to(svgRef.current, {
        rotation: dataTheme?.deg,
        duration: 0.8,
        ease: "back.out",
      });
    }
  }, [dataTheme]);

  const handleClick = useCallback(
    (newTheme: themeOption) => {
      setHandleTheme(newTheme);
    },
    [theme],
  );

  const currentMood = mood === "false";

  return (
    <div className="mood-selector z-9999 fixed inset-0 flex min-h-screen w-screen items-center justify-center">
      <div className="grid-rows-[1fr 50px] z-60 mt-15 absolute inset-0 grid h-svh min-h-screen w-screen place-content-center justify-items-center gap-5">
        {/* Mode Selection */}
        <div
          className={`relative transform-gpu transition-all duration-300 ease-in-out ${currentMood ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          <svg
            width="575"
            height="575"
            viewBox="0 0 575 575"
            fill="none"
            className="size-65 container-svg mt-8 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            opacity={0}
            ref={svgRef}
          >
            <rect width="575" height="575" />
            <circle
              cx="287.5"
              cy="287.5"
              r="285.2"
              stroke="var(--bg-secondary)"
              strokeWidth="4"
              strokeDashoffset={0}
              fill="none"
              strokeLinecap="round"
              ref={circleRef}
            />
            <g id="Clock_body" style={{ opacity: 0 }} ref={knobRef}>
              <g id="Surface_top" filter="url(#filter0_d_0_1)"></g>
              <g id="Hours">
                <g id="10">
                  <rect
                    x="147.914"
                    y="132.733"
                    width="2"
                    height="40"
                    transform="rotate(134 147.914 132.733)"
                  />
                  <rect
                    x="147.914"
                    y="132.733"
                    width="2"
                    height="40"
                    transform="rotate(134 147.914 132.733)"
                    stroke="var(--bg-secondary)"
                    strokeWidth="5"
                  />
                </g>
                <g id="9">
                  <rect
                    x="82"
                    y="272"
                    width="2"
                    height="40"
                    transform="rotate(90 82 272)"
                  />
                  <rect
                    x="82"
                    y="272"
                    width="2"
                    height="40"
                    transform="rotate(90 82 272)"
                    stroke="var(--bg-secondary)"
                    strokeWidth="5"
                  />
                </g>
                <g id="7">
                  <rect
                    x="135.733"
                    y="419"
                    width="2"
                    height="40"
                    transform="rotate(44 135.733 419)"
                  />
                  <rect
                    x="135.733"
                    y="419"
                    width="2"
                    height="40"
                    transform="rotate(44 135.733 419)"
                    stroke="var(--bg-secondary)"
                    strokeWidth="5"
                  />
                </g>
                <g id="6&#231;&#130;&#185;">
                  <rect x="283" y="479" width="5" height="40" />
                  <rect
                    x="283"
                    y="479"
                    width="2"
                    height="40"
                    stroke="var(--bg-secondary)"
                    strokeWidth="5"
                  />
                </g>
                <g id="5">
                  <rect
                    x="430"
                    y="429.82"
                    width="2"
                    height="40"
                    transform="rotate(-43 430 429.82)"
                  />
                  <rect
                    x="430"
                    y="429.82"
                    width="2"
                    height="40"
                    transform="rotate(-43 430 429.82)"
                    stroke="var(--bg-secondary)"
                    strokeWidth="5"
                  />
                </g>
                <g id="3">
                  <rect
                    x="489"
                    y="282"
                    width="2"
                    height="40"
                    transform="rotate(-90 489 282)"
                  />
                  <rect
                    x="489"
                    y="282"
                    width="2"
                    height="40"
                    transform="rotate(-90 489 282)"
                    stroke="var(--bg-secondary)"
                    strokeWidth="5"
                  />
                </g>
                <g id="2">
                  <rect
                    x="426.184"
                    y="137.67"
                    width="2"
                    height="40"
                    transform="rotate(-134 426.184 137.67)"
                  />
                  <rect
                    x="426.184"
                    y="137.67"
                    width="2"
                    height="40"
                    transform="rotate(-134 426.184 137.67)"
                    stroke="var(--bg-secondary)"
                    strokeWidth="5"
                  />
                </g>
                <path
                  id="Polygon 1"
                  d="M303.321 69H268.679L286 38.999L303.321 69Z"
                  fill="var(--bg-secondary)"
                  stroke={theme == "night" ? "#dedede" : "var(--bg-background)"}
                />
                <g id="arrow">
                  <line
                    id="Line 5"
                    x1="286"
                    y1="267"
                    x2="286"
                    y2="287"
                    stroke="var(--bg-secondary)"
                    strokeWidth="4"
                  />
                  <line
                    id="Line 6"
                    x1="296"
                    y1="277"
                    x2="276"
                    y2="277"
                    stroke="var(--bg-secondary)"
                    strokeWidth="4"
                  />
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0.344866"
                y="0.344866"
                width="573.791"
                height="573.791"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1.3793" dy="1.3793" />
                <feGaussianBlur stdDeviation="5.51722" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.952941 0 0 0 0 0.952941 0 0 0 0 0.952941 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          {DataTheme.map((mode, i) => (
            <button
              key={i}
              style={{ opacity: 0, scale: 0 }}
              className={`option-color ${mode.className} h-fit w-fit cursor-pointer uppercase tracking-wider transition-opacity ${
                theme === mode?.name ? "opacity-100" : "opacity-70"
              }`}
              onClick={() => handleClick(mode.name)}
            >
              <span
                className={`mx-auto block size-2.5 rounded-full border ${
                  theme === mode?.name
                    ? "border-none bg-red-500"
                    : "border-gray-500 bg-transparent"
                }`}
              />
              <ScrambleText
                text={mode.name}
                overdrive={32}
                tick={1}
                speed={0.9}
                className="tracking-wide"
              />
            </button>
          ))}

          <ScrambleText
            text="Connecting to the database..."
            style={{ opacity: 0 }}
            tick={7}
            step={7}
            className="status GT-america -translate-1/2 fixed left-1/2 top-1/2 whitespace-nowrap text-xs"
          />
        </div>

        <p
          style={{ transform: `scaleY(0)` }}
          className="cta min-w-3xs ms-2 tracking-wider"
        >
          SET THE MOOD THAT MATCHES WITH YOUR VIBE
        </p>

        <button
          onClick={() => handleMoodChange("true")}
          style={{ transform: `scaleY(0)` }}
          className={`cta ${theme === "spring" ? "bg-[#dedede] text-[#161616]" : "bg-secondary text-primary"} mx-auto my-auto flex h-8 w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full py-1 pe-2 ps-4 text-[15px]/[7px] font-medium tracking-wide`}
        >
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

        <span className="cta bg-dots md:h-35 absolute inset-x-0 -bottom-5 -z-10 w-full"></span>
      </div>

      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}
