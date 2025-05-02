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

function Home() {
  const appRef = useRef<HTMLDivElement>(null);

  useHomeAnimations(appRef);

  return (
    <div ref={appRef} className="max-h-screen min-h-screen overflow-hidden">
      <section className="max-w-320 bg-background relative m-auto my-5 grid h-[93svh] max-h-screen grid-cols-1 grid-rows-2 items-center gap-2 overflow-hidden rounded-2xl px-8">
        <div className="item mt-auto px-4">
          <ScrambleText
            text="Hey there! Ready to craft an amazing digital experience with me? ✨"
            className="block max-w-60 overflow-hidden text-wrap text-xl uppercase tracking-wider"
            tick={1}
          />
        </div>

        <div className="project z-100 absolute -right-0 -top-2.5 w-11/12 overflow-x-hidden">
          <PortofiloCard />
        </div>

        {/* title */}
        <div className="item flex h-auto w-full items-center justify-between">
          <LinkCardWork />
          <CircleNav />
        </div>

        <OptionColor />

        {/* <div className="fixed inset-10 -z-10">
          <Background />
        </div> */}
      </section>

      {/* <CircleLoader /> */}
    </div>
  );
}

export default Hoc(Home);
