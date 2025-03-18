"use client";
import { useScramble } from "use-scramble";
import { ScrambleTextProps } from "../../libs/Index";

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
  });

  return (
    <div ref={ref} {...props} onMouseEnter={replay}>
      {text}
    </div>
  );
};
