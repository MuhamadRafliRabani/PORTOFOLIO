"use client";
import { useScramble } from "use-scramble";
import { ScrambleTextProps } from "../../libs/Index";
import { useEffect } from "react";

export const ScrambleText = ({
  text,
  speed = 0.86,
  tick = 3,
  overdrive = 9,
  step = 1.3,
  ...props
}: ScrambleTextProps) => {
  const { ref, replay } = useScramble({
    text: text,
    speed: speed,
    tick: tick,
    overflow: true,
    step: step,
    overdrive: overdrive,
    scramble: 2,
  });

  useEffect(() => {
    replay();
  }, []);

  return (
    <span ref={ref} {...props} onMouseEnter={replay}>
      {text}
    </span>
  );
};
