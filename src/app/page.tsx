import NavCircleAction from "./component/ui/animate-card";
import CircleNav from "./component/circle-nav";
import LinkCardWork from "./component/link-card-work";
import { ScrambleText } from "./component/ui/scrumble-text";
import OptionColor from "./component/ui/option-color";

export default function Home() {
  return (
    <div className="app relative">
      <div className="relative z-40 mx-auto mt-4 h-[95svh] max-h-screen max-w-7xl rounded-2xl bg-[url('/space.png')] p-4 pt-14 text-white">
        <div className="flex h-4/5 items-center md:ms-4">
          <ScrambleText
            text="Hey there! Ready to craft an amazing digital experience with me? ✨"
            className="max-w-60 text-xl uppercase tracking-wider"
            tick={1}
          />
        </div>

        {/* title */}
        <div className="flex items-start justify-between md:-mt-12 md:pe-16 md:ps-4">
          {/* recenly work */}
          <LinkCardWork />

          <NavCircleAction />
          {/* circle nav */}
          <CircleNav />
        </div>

        {/* color option */}
        <OptionColor />
      </div>
    </div>
  );
}
