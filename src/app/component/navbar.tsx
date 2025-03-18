import { AlignStartHorizontal } from "lucide-react";
import { ScrambleText } from "./ui/scrumble-text";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex min-h-14 items-end justify-between px-14">
      <div className="md:min-w-59 flex items-end justify-between">
        <AlignStartHorizontal className="size-8 -rotate-90 duration-300" />

        <ScrambleText
          text="RAFLI RABANI [NR]"
          className="font-light tracking-widest md:text-sm"
          overdrive={95}
          speed={1}
          tick={1}
        />
      </div>

      <ScrambleText
        text="REACT DEVELOVER / LARAVEL DEVELOPER"
        className="md:-ms-130 -me-24 inline-block max-w-[140px] font-extralight tracking-widest md:-mb-3 md:text-sm/4"
        speed={1}
        tick={1}
      />

      <div className="flex items-center gap-2">
        <span className="inline-block size-1.5 rounded-full bg-red-500"></span>
        <ScrambleText
          text="AVAILABLE FOR WORK"
          className="text-sm font-extralight tracking-widest"
          speed={1}
          tick={1}
        />
      </div>
    </div>
  );
};

export default Navbar;
