"use client";
import CircleNav from "./component/circle-nav";
import LinkCardWork from "./component/link-card-work";
import { ScrambleText } from "./component/ui/scrumble-text";
import OptionColor from "./component/ui/option-color";
import PortofiloCard from "./component/portofilo-card";
import { useRef } from "react";
import { useHomeAnimations } from "./hooks/use-home-animate";
import Background from "./component/ui/background";
import Globe from "./component/ui/globe";
import MoodSelector from "./component/ui/loader";
import { useHandleMood } from "./hooks/use-handle-mood";

function Home() {
  const appRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const { mood } = useHandleMood();

  useHomeAnimations(appRef, projectRef);

  return (
    <section
      ref={appRef}
      className="max-w-screen max-h-screen w-[98.5vw] overflow-hidden"
    >
      <div className="max-w-320 relative m-auto my-5 grid h-[93svh] w-full grid-cols-1 grid-rows-2 items-end">
        <div
          style={{ transform: `translateY(100px)` }}
          className="introduce md:translate-y-25 translate-y-45 ms-10 inline-block w-fit px-4"
        >
          <ScrambleText
            text="Hey there! Ready to craft an amazing digital experience with me? ✨"
            className="overflWow-hidden block max-w-60 text-wrap text-xl uppercase tracking-wider"
            tick={1}
          />
        </div>

        <PortofiloCard projectRef={projectRef} />

        <div className="w-20/21 mx-auto my-5 flex h-auto items-center justify-between">
          <LinkCardWork />
          <CircleNav />
        </div>

        <div className="size-25 -z-9 absolute -bottom-0 left-1 right-0 top-0 h-full w-full md:left-8">
          <Globe />
        </div>
        <Background />
      </div>
      <OptionColor />

      {/* {mood == "true" ? <MoodSelector /> : null} */}
      <MoodSelector />
    </section>
  );
}

export default Home;
