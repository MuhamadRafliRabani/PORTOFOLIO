"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { OpenContextType, OpenState } from "../libs/Index";

const OpenContext = createContext<OpenContextType | undefined>(undefined);

export const OpenProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<OpenState>({ name: "", open: false });

  return (
    <OpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </OpenContext.Provider>
  );
};

export const useOpen = (): OpenContextType => {
  const context = useContext(OpenContext);
  if (!context) {
    throw new Error("useOpen must be used within an OpenProvider");
  }
  return context;
};
