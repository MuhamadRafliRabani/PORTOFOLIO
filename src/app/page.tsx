"use client";
import CircleNav from "./component/circle-nav";
import LinkCardWork from "./component/link-card-work";
import OptionColor from "./component/ui/option-color";
import PortofiloCard from "./component/portofilo-card";
import { useEffect, useRef, useState } from "react";
import { useHomeAnimations } from "./hooks/use-home-animate";
import Background from "./component/ui/background";
import Globe from "./component/ui/globe";
import MoodSelector from "./component/ui/loader";
import { LineSplitText } from "./component/split-text";
import { ArrowDown } from "lucide-react";

function Home() {
  const appRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(false);
    }, 10000); // 10 detik

    return () => clearTimeout(timer);
  }, []);

  useHomeAnimations(appRef, projectRef);

  return (
    <section ref={appRef} className="max-w-screen max-h-screen overflow-hidden">
      <div className="max-w-325 relative m-auto my-5 grid h-[95dvh] w-full grid-cols-1 grid-rows-2 items-end md:h-[93svh]">
        <div className="introduce translate-y-25 ms-5 inline-block w-fit px-4 md:ms-10 md:translate-y-0">
          <LineSplitText text="Hey there! Ready to craft an amazing digital experience with me? ✨" />
        </div>

        <PortofiloCard projectRef={projectRef} />

        <div className="w-20/21 mx-auto my-5 flex h-auto items-center justify-between">
          <LinkCardWork />
          {showArrow ? (
            <ArrowDown className="mt-auto size-5 animate-bounce opacity-100" />
          ) : (
            <div className="mt-auto opacity-0 transition-opacity duration-500">
              <ArrowDown className="size-5" />
            </div>
          )}
          <CircleNav />
        </div>

        <div className="size-25 -z-9 absolute -bottom-0 left-1 right-0 top-0 h-full w-full bg-transparent md:left-8">
          <Globe />
        </div>
        <Background />
      </div>
      <OptionColor />

      <MoodSelector />
    </section>
  );
}

export default Home;
