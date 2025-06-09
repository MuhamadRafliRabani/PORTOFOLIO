"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextProps } from "../../libs/Index";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const ScrambleText = ({
  text,
  duration = 0.35,
  chars = "ABCASDASDA",
  speed = 25,
  revealDelay = 0.1,
  ...props
}: ScrambleTextProps) => {
  const elRef = useRef<HTMLSpanElement>(null!);

  const playScramble = () => {
    if (!elRef.current) return;
    gsap.to(elRef.current, {
      scrambleText: {
        text,
        chars,
        speed,
        revealDelay,
      },
      duration,
      ease: "none",
    });
  };

  useEffect(() => {
    playScramble();
  }, [text]);

  useEffect(() => {
    gsap.fromTo(
      elRef.current,
      { opacity: 0, scale: 1.02 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "expo.out" },
    );
  }, []);

  return (
    <span
      ref={elRef}
      {...props}
      onMouseEnter={playScramble}
      style={{ display: "inline-block" }}
    >
      {text}
    </span>
  );
};
