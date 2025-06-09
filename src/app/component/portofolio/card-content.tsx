"use client";
import Link from "next/link";
import Description from "./description";
import { useRef } from "react";
import { portpfolio } from "@/app/data/portofolio";

const CardContent = ({ data }: { data: (typeof portpfolio)[0] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="GT-america md:min-w-xl grid-rows-[20px 2fr 20px] grid h-full w-full gap-4 p-3.5 transition-all duration-300">
      <div className="flex max-h-10 -translate-y-20 items-center justify-between transition-transform duration-300 ease-[cubic-bezier(0.36,_0,_0.64,_1)] group-hover:translate-y-0">
        <Description descriptions={data.description} />
      </div>
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={data.website.link}
        target="_blank"
        rel="noopener noreferrer"
        className="md:max-h-70 h-full w-full"
      >
        <video
          ref={videoRef}
          src={"/videos/" + data.video}
          muted
          preload="metadata"
          className="h-full w-full rounded-md object-fill"
        />{" "}
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
};

export default CardContent;
