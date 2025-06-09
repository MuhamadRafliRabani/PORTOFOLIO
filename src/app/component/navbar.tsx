import { AlignStartHorizontal } from "lucide-react";
import { ScrambleText } from "./ui/scrumble-text";

const Navbar = () => {
  return (
    <div
      style={{ transform: `translateY(-200px)` }}
      className="navbar item fixed inset-x-0 top-0 z-50 flex min-h-14 items-end justify-between px-6 md:px-14"
    >
      <AlignStartHorizontal className="size-8 -rotate-90 duration-300" />
      <div className="md:min-w-59 md:-ms-170 flex items-end justify-between gap-2">
        <ScrambleText
          text="RAFLI RABANI [NR]"
          className="whitespace-nowrap font-light tracking-widest md:text-sm"
          duration={0.2}
          chars="___----___"
          speed={25}
          revealDelay={0.1}
        />
        <ScrambleText
          text="REACT DEVELOVER / LARAVEL DEVELOPER"
          className="-me-24 hidden max-w-[140px] overflow-hidden font-extralight tracking-widest opacity-0 md:-mb-3 md:-me-40 md:inline-block md:text-sm/4"
          chars="▲■●△□○◆◇"
          speed={25}
          revealDelay={0.1}
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-block size-1.5 rounded-full bg-red-500"></span>
        <ScrambleText
          text="AVAILABLE FOR WORK"
          className="text-sm font-extralight tracking-widest"
          speed={25}
          chars="ABSCASDA"
          revealDelay={0.2}
        />
      </div>
    </div>
  );
};

export default Navbar;
