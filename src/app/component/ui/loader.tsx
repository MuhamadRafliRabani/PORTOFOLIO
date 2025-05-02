"use client";
import { useEffect, useRef, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrambleText } from "./scrumble-text";
import { Plus } from "lucide-react";
import { DataTheme } from "@/app/data/theme";
import { useHandleTheme } from "@/app/hooks/use-handle-theme";
import { useHandleMood } from "@/app/hooks/use-handle-mood";
import { themeOption } from "@/app/libs/Index";

export default function MoodSelector() {
  const { theme, setHandleTheme } = useHandleTheme();
  const { handleMoodChange, mood } = useHandleMood();
  const knobRef = useRef<SVGSVGElement>(null);

  const dataTheme = useMemo(
    () => DataTheme.find((item) => item.name === theme),
    [theme],
  );

  useEffect(() => {
    if (knobRef.current && dataTheme !== null) {
      gsap.to(knobRef.current, {
        rotation: dataTheme?.deg,
        duration: 0.9,
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
    <div className="mood-selector z-999 fixed inset-0 flex min-h-screen w-screen items-center justify-center">
      <div className="grid-rows-[1fr 50px] z-60 grid h-svh min-h-screen w-full place-content-center gap-5">
        {/* Mode Selection */}
        <div
          className={`relative transform-gpu transition-all duration-300 ease-in-out ${currentMood ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          <svg
            width="575"
            height="575"
            viewBox="0 0 575 575"
            fill="none"
            className="size-65 border-secondary rounded-full border"
            xmlns="http://www.w3.org/2000/svg"
            ref={knobRef}
          >
            <g id="Clock_body">
              <g id="Hours">
                <g id="11">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(186.045 100.527) rotate(149)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="10">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(106.751 175.265) rotate(119)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="9">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(76 278) rotate(90)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="8">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(100.527 385.677) rotate(59)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="7">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(175.265 464.972) rotate(29)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="6&#231;&#130;&#185;">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(278 496)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="5">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(385.677 471.196) rotate(-31)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="4">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(464.971 396.457) rotate(-61)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="3">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(496 294) rotate(-90)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="2">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(471.195 186.045) rotate(-121)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <g id="1">
                  <rect
                    width="8"
                    height="50"
                    transform="translate(396.457 106.751) rotate(-151)"
                    fill="#DEDEDE"
                    className="stroke-secondary fill-secondary"
                  />
                </g>
                <path
                  id="Polygon 1"
                  d="M282.5 21L309.78 68.25H255.22L282.5 21Z"
                  fill="#DEDEDE"
                  className="fill-secondary"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2_335"
                x="0.344866"
                y="0.344866"
                width="573.791"
                height="573.791"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                  result="effect1_dropShadow_2_335"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_335"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {DataTheme.map((mode, i) => (
            <button
              key={i}
              className={`${mode.className} min-w-5 cursor-pointer uppercase tracking-wide transition-opacity ${
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
        </div>

        <p className="min-w-3xs ms-2 tracking-wider">
          SET THE MOOD THAT MATCHES WITH YOUR VIBE
        </p>

        <button
          onClick={() => handleMoodChange("true")}
          className={`${theme === "spring" ? "bg-[#dedede] text-[#161616]" : "bg-secondary text-primary"} mx-auto my-auto flex h-8 w-fit cursor-pointer items-center justify-center gap-1.5 rounded-full py-1 pe-2 ps-4 text-[15px]/[7px] font-medium tracking-wide`}
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

        <span className="bg-dots md:h-35 absolute inset-x-0 -bottom-5 -z-10 w-full"></span>
      </div>
    </div>
  );
}
