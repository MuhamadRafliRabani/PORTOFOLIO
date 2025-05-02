import React from "react";
import { ScrambleText } from "./ui/scrumble-text";

const LinkCardWork = () => {
  return (
    <div className="space-y-4">
      <ScrambleText
        text="RECENT WORK"
        className="block text-sm font-extralight tracking-widest"
      />
      <div className="h-44 w-52 rounded-xl border border-white bg-yellow-400"></div>
    </div>
  );
};

export default LinkCardWork;
