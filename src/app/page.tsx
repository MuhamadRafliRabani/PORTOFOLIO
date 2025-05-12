"use client";
import CircleNav from "./component/circle-nav";
import LinkCardWork from "./component/link-card-work";
import { ScrambleText } from "./component/ui/scrumble-text";
import OptionColor from "./component/ui/option-color";
import PortofiloCard from "./component/portofilo-card";
import { useRef } from "react";
import { useHomeAnimations } from "./hooks/use-home-animate";
import CircleLoader from "./component/load";
import Background from "./component/ui/background";
import Hoc from "./hoc/Hoc";
import Globe from "./component/ui/globe";

function Home() {
  const appRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useHomeAnimations(appRef, projectRef);

  return (
    <section
      ref={appRef}
      className="max-w-screen max-h-screen w-[98.5vw] overflow-hidden"
    >
      <div className="max-w-320 relative m-auto my-5 grid h-[93svh] w-full grid-cols-1 grid-rows-2 items-end">
        <div className="item inline-block px-4 md:mt-40">
          <ScrambleText
            text="Hey there! Ready to craft an amazing digital experience with me? ✨"
            className="overflWow-hidden block max-w-60 text-wrap text-xl uppercase tracking-wider"
            tick={1}
          />
        </div>

        <PortofiloCard projectRef={projectRef} />

        <div className="item w-20/21 mx-auto my-5 flex h-auto items-center justify-between">
          <LinkCardWork />
          <CircleNav />
        </div>

        <div className="size-25 -z-9 absolute -bottom-0 left-8 right-0 top-0 h-full w-full">
          <Globe />
        </div>
        <Background />
      </div>
      <OptionColor />

      {/* <CircleLoader /> */}
    </section>
  );
}

export default Hoc(Home);
