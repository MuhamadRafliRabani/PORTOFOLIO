"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { portpfolio } from "../data/portofolio";
import { DescriptionItem } from "../libs/Index";

gsap.registerPlugin(ScrollTrigger);

const PortofiloCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray(".porto-card");

    gsap.fromTo(
      cards,
      { x: 2300, opacity: 0 }, // Awal animasi (geser 200px ke kanan & opacity 0)
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 5%", // Animasi mulai saat kartu hampir terlihat
          end: "bottom 80%",
          scrub: true,
          anticipatePin: 1,
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  return (
    <div
      ref={containerRef}
      className="GT-america z-90 relative flex gap-5 overflow-hidden"
    >
      {portpfolio.map((data, index) => (
        <div
          key={index}
          className="porto-card bg-primary md:min-w-xl h-135 grid-rows-[80px 1fr 80px] group grid w-full max-w-3xl gap-4 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
        >
          <div className="box-border inline-flex h-full max-h-20 w-full -translate-y-10 justify-between px-4 pt-2 transition-all duration-300 group-hover:translate-y-0">
            <Description descriptions={data.description} />
          </div>
          <div className="w-md m-auto inline-block h-[95%] overflow-hidden rounded-md">
            <Image
              src={data.image}
              alt={data.website.name}
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-auto h-full max-h-20 w-full px-4 py-2">
            <p className="text-xs opacity-70">
              WEBSITE:
              <Link
                href={data.website.link}
                className="block cursor-pointer text-[11px] group-hover:underline"
              >
                {data.website.name}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortofiloCard;

const Description: React.FC<{ descriptions: DescriptionItem[] }> = ({
  descriptions,
}) => (
  <>
    {descriptions.map((item, index) => (
      <p key={index} className="text-[11px] opacity-70">
        {item.name}: <span className="block text-xs">{item.value}</span>
      </p>
    ))}
  </>
);
