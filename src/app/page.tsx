"use client";
import CircleNav from "./component/circle-nav";
import LinkCardWork from "./component/link-card-work";
import { ScrambleText } from "./component/ui/scrumble-text";
import OptionColor from "./component/ui/option-color";
import AnimateInformationCard from "./component/ui/animated-information-card";
import PortofiloCard from "./component/portofilo-card";
import { useRef } from "react";
import { useHomeAnimations } from "./hooks/use-home-animate";
import MoodSelector from "./component/ui/loader";
import CircleLoader from "./component/load";

export default function Home() {
  const appRef = useRef<HTMLDivElement>(null);

  useHomeAnimations(appRef);

  return (
    <div
      ref={appRef}
      className="relative max-h-screen min-h-screen overflow-hidden"
    >
      <div className="max-w-320 relative z-40 m-auto mt-4 h-[93svh] max-h-screen rounded-2xl bg-[url('/space.png')] p-4 pt-14 text-white">
        <div className="app flex h-4/5 items-center md:ms-4">
          <ScrambleText
            text="Hey there! Ready to craft an amazing digital experience with me? ✨"
            className="max-w-60 text-xl uppercase tracking-wider"
            tick={1}
          />
        </div>

        <div className="-translate-y-[80.5%] overflow-x-hidden">
          <PortofiloCard />
        </div>

        {/* title */}
        <div className="md:pe-22 fixed inset-x-4 top-full z-10 flex -translate-y-full justify-between pb-5 md:ps-10">
          <LinkCardWork />
          <AnimateInformationCard />
          <CircleNav />
        </div>

        <OptionColor />
      </div>
      <MoodSelector />
      {/* <CircleLoader /> */}
    </div>
  );
}
