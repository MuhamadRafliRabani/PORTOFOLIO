"use client";

import React, { useCallback } from "react";
import { useHandleTheme } from "@/app/hooks/use-handle-theme";
import { themeOption } from "@/app/libs/Index";
import { themeOptionsButton } from "@/app/data/theme";

const OptionColor = () => {
  const { setHandleTheme, theme } = useHandleTheme();

  const handleClick = useCallback(
    (newTheme: themeOption) => {
      setHandleTheme(newTheme);
    },
    [setHandleTheme],
  );

  return (
    <div
      id="option-color"
      className="item absolute left-0 top-1/3 z-50 flex h-7 w-14 -translate-y-1/2 rotate-90 items-center justify-center space-x-2 rounded-t-md bg-[var(--bg-primary)] px-2"
    >
      {themeOptionsButton.map(({ id, color }) => (
        <React.Fragment key={id}>
          <input
            type="radio"
            id={id}
            name="theme"
            className="hidden"
            onChange={() => handleClick(id)}
          />
          <label
            htmlFor={id}
            style={{ backgroundColor: color }}
            className={`radio ${theme === id ? "border-primary" : "border-none"}`}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default OptionColor;
