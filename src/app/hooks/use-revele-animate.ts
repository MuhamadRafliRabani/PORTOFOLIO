import gsap from "gsap";
import { RefObject, useEffect } from "react";
import { useHandleMood } from "./use-handle-mood";

export const useReveleAnimate = (
  circleRef: RefObject<SVGCircleElement | null>,
) => {
  const { mood } = useHandleMood();

  useEffect(() => {
    if (!circleRef.current) return;
    const tl = gsap.timeline();
    const bar = gsap.utils.toArray(".bar");
    const item = gsap.utils.toArray(".item");

    // animate stokeDashOffset
    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumref = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumref}`;
    circle.style.strokeDashoffset = `${circumref}`;

    gsap.to(circle, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.inOut",
    });

    if (mood == "true") {
      tl.to(
        bar,
        {
          scaleY: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power4.inOut",
        },
        0,
      ).to(
        item,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: {
            each: 0.45,
            from: "end",
          },
          ease: "power4.inOut",
        },
        0,
      );
    }

    return () => {
      tl.kill();
    };
  }, [circleRef, mood]);
};
