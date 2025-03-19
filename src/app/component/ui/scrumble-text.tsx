"use client";
import { useScramble } from "use-scramble";
import { ScrambleTextProps } from "../../libs/Index";
import { useEffect } from "react";

export const ScrambleText = ({
  text,
  speed = 0.86,
  tick = 3,
  overdrive = 9,
  ...props
}: ScrambleTextProps) => {
  const { ref, replay } = useScramble({
    text: text,
    speed: speed,
    tick: tick,
    overflow: true,
    overdrive: overdrive,
    scramble: 2,
  });

  useEffect(() => {
    replay();
  }, []);

  return (
    <div ref={ref} {...props} onMouseEnter={replay}>
      {text}
    </div>
  );
};
