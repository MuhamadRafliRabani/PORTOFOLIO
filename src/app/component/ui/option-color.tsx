import React from "react";

const OptionColor = () => {
  return (
    <div
      id="option-color"
      className="top-5/15 absolute -left-6 z-50 flex h-6 w-16 rotate-90 items-center justify-between rounded-t-sm bg-[#282828] px-4"
    >
      <button className="inline-block size-1.5 rounded-full bg-red-500"></button>
      <button className="inline-block size-1.5 rounded-full bg-yellow-400"></button>
      <button className="inline-block size-1.5 rounded-full bg-[#fafafafa]"></button>
    </div>
  );
};

export default OptionColor;
