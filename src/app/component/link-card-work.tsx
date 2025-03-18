import React from "react";
import { ScrambleText } from "./ui/scrumble-text";

const LinkCardWork = () => {
  return (
    <div id="card" className="space-y-4 md:-mt-16">
      <ScrambleText
        text="RECENT WORK"
        className="block text-sm font-extralight tracking-widest"
      />
      <div className="inline-block h-44 w-52 rounded-xl border border-white bg-yellow-400"></div>
    </div>
  );
};

export default LinkCardWork;
