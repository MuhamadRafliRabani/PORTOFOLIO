"use client";
import { useHandleTheme } from "@/app/hooks/use-handle-theme";
import { themeOption } from "@/app/libs/Index";
import React, { useCallback } from "react";

const OptionColor = () => {
  const { setHandleTheme, theme } = useHandleTheme();

  const handleClick = useCallback(
    (newTheme: themeOption) => {
      setHandleTheme(newTheme);
    },
    [theme],
  );

  return (
    <div
      id="option-color"
      className="item bg-primary w-18 absolute -left-6 top-1/2 z-50 flex h-6 -translate-y-1/2 rotate-90 items-center justify-between rounded-t-sm px-4"
    >
      <button
        className="inline-block size-2 cursor-pointer rounded-full bg-[#dedede] hover:scale-150"
        onClick={() => handleClick("light")}
      ></button>
      <button
        className="inline-block size-2 cursor-pointer rounded-full bg-[#161616] hover:scale-150"
        onClick={() => handleClick("night")}
      ></button>
      <button
        className="inline-block size-2 cursor-pointer rounded-full bg-[#d3e789] hover:scale-150"
        onClick={() => handleClick("spring")}
      ></button>
    </div>
  );
};

export default OptionColor;
