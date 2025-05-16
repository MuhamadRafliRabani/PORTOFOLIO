import gsap from "gsap";
import { RefObject, useEffect } from "react";
import { useHandleMood } from "./use-handle-mood";

export const useReveleAnimate = (
  circleRef: RefObject<SVGCircleElement | null>,
  knobRef: RefObject<SVGElement | null>,
) => {
  const { mood } = useHandleMood();

  useEffect(() => {
    if (!circleRef.current) return;
    if (!knobRef.current) return;
    const tl = gsap.timeline();
    const tlClock = gsap.timeline();
    const bar = gsap.utils.toArray(".bar");
    const item = gsap.utils.toArray(".item");
    const cta = gsap.utils.toArray(".cta");
    const optionColor = gsap.utils.toArray(".option-color");

    // animate stokeDashOffset
    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumref = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumref}`;
    circle.style.strokeDashoffset = `${circumref}`;

    tlClock
      .to(".container-svg", {
        opacity: 1,
        ease: "sine.inOut",
      })
      .to(
        circle,
        {
          strokeDashoffset: 0,
          duration: 3.5,
          ease: "power2.in",
        },
        0,
      )
      .fromTo(
        ".status",
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 3.5,
          ease: "power2.in",
        },
        0,
      )
      .to(
        knobRef.current,
        {
          opacity: 1,
          duration: 2,
          ease: "power4.in",
        },
        2.8,
      )
      .to(optionColor, {
        opacity: 1,
        scale: 1,
        duration: 0.08,
        stagger: {
          each: 0.1,
          from: "start",
        },
        ease: "power4.inOut",
      })
      .to(cta, {
        scaleY: 1,
        duration: 0.1,
        stagger: {
          each: 0.2,
          from: "start",
        },
        ease: "sine.inOut",
      });

    if (mood == "true") {
      tl.to(
        bar,
        {
          scaleY: 0,
          duration: 0.95,
          stagger: 0.05,
          ease: "power2.inOut",
          backgroundColor: "var(--bg-primary)",
        },
        0,
      )
        .to(
          item,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: {
              each: 0.08,
              from: "center",
            },
            ease: "sine.inOut",
          },
          "<+0.5",
        )
        .to(
          ".introduce",
          {
            y: 150,
            duration: 1,
            ease: "sine.inOut",
          },
          "-=1",
        )
        .to(
          cta,
          {
            opacity: 0,
            scaleY: 0,
            duration: 1.2,
            stagger: {
              each: 0.1,
              from: "end",
            },
            ease: "power4.inOut",
          },
          0,
        )
        .to(
          ".mood-selector",
          {
            display: "none",
            duration: 1,
            ease: "power1",
          },
          "<+0.3",
        );
    }

    return () => {
      tl.kill();
    };
  }, [circleRef, knobRef, mood]);
};
