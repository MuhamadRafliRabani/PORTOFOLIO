import React, { ReactNode, RefObject } from "react";

export interface CardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ScrambleTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  speed?: number;
  tick?: number;
  step?: number;
  overdrive?: number;
}

export interface NavCircleActionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  container: RefObject<null>;
}

export type OpenState = {
  name: string;
  open: boolean;
};

export type OpenContextType = {
  isOpen: OpenState;
  setIsOpen: React.Dispatch<React.SetStateAction<OpenState>>;
};

export type DescriptionItem = {
  name: string;
  value: string;
};

export type Website = {
  name: string;
  link: string;
};

export interface ProjectInfo {
  description: DescriptionItem[];
  website: Website;
  image: string;
}

export type themeOption = "night" | "sky" | "spring";
export type haveMoodOption = "true" | "false";

export interface TypeDataTheme {
  name: themeOption;
  deg: number;
  className: string;
}

export interface HocInterface {
  children: ReactNode;
}
