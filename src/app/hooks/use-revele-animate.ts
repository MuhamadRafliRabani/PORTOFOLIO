import gsap from "gsap";
import { RefObject, useEffect } from "react";
import { useHandleMood } from "./use-handle-mood";
import { useReveleAnimateCondion } from "./use-revele-animate-condion";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const useReveleAnimate = (
  circleRef: RefObject<SVGCircleElement | null>,
  knobRef: RefObject<SVGElement | null>,
) => {
  const { mood } = useHandleMood();
  const { status, setStatus } = useReveleAnimateCondion();

  useEffect(() => {
    if (!circleRef.current) return;
    if (!knobRef.current) return;
    const tl = gsap.timeline();
    const tlClock = gsap.timeline();
    const bar = gsap.utils.toArray(".bar");
    const item = gsap.utils.toArray<HTMLElement>(".item");
    const cta = gsap.utils.toArray(".cta");
    const optionColor = gsap.utils.toArray(".option-color");
    const split = SplitText.create(".introduce", {
      type: "lines",
      linesClass: "line",
      mask: "lines",
    });

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
          duration: 4,
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

    const mm = gsap.matchMedia();

    if (mood === "true" && status === false) {
      mm.add("(max-width: 768px)", () => {
        const tl = gsap.timeline();

        // Mobile
        tl.to(
          bar,
          {
            scaleY: 0,
            duration: 0.8,
            stagger: 0.04,
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
              duration: 0.6,
              stagger: { each: 0.4, from: "end" },
              ease: "sine.inOut",
              onComplete: () => setStatus(true),
            },
            "<+0.4",
          )
          .from(
            split.lines,
            {
              yPercent: 100,
              autoAlpha: 0,
              duration: 0.5,
              ease: "expo.out",
              stagger: 0.2,
            },
            "-=0.9",
          )
          .to(
            cta,
            {
              opacity: 0,
              scaleY: 0,
              duration: 1,
              stagger: { each: 0.1, from: "end" },
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
      });

      // Desktop
      mm.add("(min-width: 769px)", () => {
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
              stagger: { each: 0.3, from: "end" },
              ease: "sine.inOut",
              onComplete: () => setStatus(true),
            },
            "<+0.5",
          )
          .from(
            split.lines,
            {
              yPercent: 100,
              autoAlpha: 0,
              duration: 0.5,
              ease: "expo.out",
              stagger: 0.2,
            },
            "-=0.4",
          )
          .to(
            cta,
            {
              opacity: 0,
              scaleY: 0,
              duration: 1.2,
              stagger: { each: 0.1, from: "end" },
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
      });
    }

    return () => {
      tl.kill();
      mm.kill();
      split.revert();
    };
  }, [circleRef, knobRef, mood, status]);
};
