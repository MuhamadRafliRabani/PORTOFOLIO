"use client";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useCallback, useEffect, useState } from "react";
import { portpfolio } from "../data/portofolio";
import { DescriptionItem } from "../libs/Index";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useHandleScrollToTop } from "../hooks/useScrollByClick";
import useEmblaCarousel from "embla-carousel-react";

type portofiloCard = {
  projectRef: RefObject<HTMLDivElement | null>;
};
const PortofiloCard = ({ projectRef }: portofiloCard) => {
  const [closeVisible, setCloseVisible] = useState<boolean>(false);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    setCloseVisible(true);
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      ref={projectRef}
      className="md:w-320 max-h-145 relative z-50 w-full translate-y-[20vh] px-4 md:max-h-screen md:translate-y-[43vh] md:bg-[var(--bg-background)] md:px-0"
    >
      <div className="embla__viewport w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full min-h-[90vh] flex-nowrap items-center justify-start gap-2 text-xs font-medium">
          {portpfolio.map((data, index) => (
            <div
              key={index}
              className="embla__slide h-full flex-[0_0_100%] overflow-hidden rounded-xl bg-[var(--bg-primary)] text-white md:flex-[0_0_50%]"
            >
              <CardContent data={data} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls (harus di luar .viewport) */}
      <div className="z-70 absolute inset-x-0 bottom-0 flex w-full items-center justify-between px-6 text-white md:px-0">
        <div className="space-x-4">
          <button
            onClick={onPrevButtonClick}
            style={prevBtnDisabled ? { opacity: 0.1 } : { opacity: 1 }}
            disabled={prevBtnDisabled}
            className="rounded-lg border border-white"
          >
            <ChevronLeft className="size-10 p-2" />
          </button>
          <button
            onClick={onNextButtonClick}
            style={nextBtnDisabled ? { opacity: 0.1 } : { opacity: 1 }}
            disabled={nextBtnDisabled}
            className="rounded-lg border border-white"
          >
            <ChevronRight className="size-10 p-2" />
          </button>
        </div>
        <button
          onClick={() => useHandleScrollToTop()}
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

const CardContent = ({ data }: { data: (typeof portpfolio)[0] }) => (
  <div className="GT-america md:min-w-xl grid-rows-[20px 2fr 20px] group grid h-full w-full gap-4 p-3.5 transition-all duration-300">
    <div className="flex max-h-10 -translate-y-20 items-center justify-between transition-transform duration-300 ease-[cubic-bezier(0.36,_0,_0.64,_1)] group-hover:translate-y-0">
      <Description descriptions={data.description} />
    </div>
    <Link href={data.website.link} target="_blank" rel="noopener noreferrer">
      <Image
        src={data.image}
        alt={data.website.name}
        width={800}
        height={1000}
        className="md:min-h-98 h-full w-full rounded-md object-cover object-left transition-transform duration-300 group-hover:scale-95"
      />
    </Link>
    <span className="max-h-10 text-sm">
      WEBSITE:
      <Link
        href={data.website.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer text-[11px] underline"
      >
        {data.website.name}
      </Link>
    </span>
  </div>
);

const Description: React.FC<{ descriptions: DescriptionItem[] }> = ({
  descriptions,
}) => (
  <>
    {descriptions.map((item, index) => (
      <p key={index} className="opacity-70">
        {item.name}: <span className="block text-[11px]">{item.value}</span>
      </p>
    ))}
  </>
);
