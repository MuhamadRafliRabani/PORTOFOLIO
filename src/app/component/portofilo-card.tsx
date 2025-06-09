"use client";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { portpfolio } from "../data/portofolio";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useHandleScrollToTop } from "../hooks/useScrollByClick";
import { useOpenPorto } from "../hooks/use-revele-animate-condion";
import CardContent from "./portofolio/card-content";

// Tambahkan import Splide
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type PortofiloCardProps = {
  projectRef: RefObject<HTMLDivElement | null>;
};

const PortofiloCard = ({ projectRef }: PortofiloCardProps) => {
  const [closeVisible, setCloseVisible] = useState<boolean>(false);
  const { open, isOpen } = useOpenPorto();

  // Config carousel
  const splideOptions = {
    type: "loop",
    perPage: 2,
    gap: "1rem",
    arrows: false,
    pagination: false,
    drag: "free",
    focus: "start",
    breakpoints: { 768: { perPage: 1 }, 1024: { perPage: 2 } },
  };

  const handlePrevSlide = useCallback(() => {
    splideRef.current?.splide.go("<");
  }, []);

  const handleNextSlide = useCallback(() => {
    splideRef.current?.splide.go(">");
  }, []);

  const splideRef = useRef<any>(null);

  useEffect(() => {
    if (splideRef.current) setCloseVisible(true);
  }, [splideRef.current]);

  return (
    <div
      ref={projectRef}
      style={{ transform: "translateX(1500px)", opacity: 0 }}
      className="absolute inset-2 z-50 w-full bg-[var(--bg-background)] px-4 md:px-0 md:pt-5"
    >
      <Splide
        ref={splideRef}
        options={splideOptions}
        aria-label="Portfolio carousel"
      >
        {portpfolio.map((data, index) => (
          <SplideSlide key={index}>
            <div
              key={index}
              className="group h-full min-h-[500px] w-full overflow-hidden rounded-md bg-[var(--bg-primary)] text-white"
            >
              <CardContent data={data} />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="z-70 absolute inset-x-0 bottom-0 flex w-full items-center justify-between px-6 text-white md:px-0">
        <div className="space-x-4">
          <button
            onClick={handlePrevSlide}
            className="rounded-lg border border-white"
          >
            <ChevronLeft className="size-10 p-2" />
          </button>
          <button
            onClick={handleNextSlide}
            className="rounded-lg border border-white"
          >
            <ChevronRight className="size-10 p-2" />
          </button>
        </div>
        <button
          onClick={() => {
            if (window.innerWidth <= 768) {
              isOpen(false);
            } else {
              useHandleScrollToTop();
            }
          }}
          style={
            closeVisible
              ? { opacity: 1 }
              : { opacity: 0, pointerEvents: "none" }
          }
          className="border-primary z-100 size-16 cursor-pointer rounded-full border stroke-1 p-4"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default PortofiloCard;
