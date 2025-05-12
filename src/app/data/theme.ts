import { themeOption, TypeDataTheme } from "../libs/Index";

export const DataTheme: TypeDataTheme[] = [
  {
    name: "light",
    deg: -45,
    className: "-left-1 top-1/10 absolute -rotate-45",
  },
  {
    name: "night",
    deg: 0,
    className: "-top-5 absolute left-1/2 -translate-x-1/2",
  },
  {
    name: "spring",
    deg: 45,
    className: "rotate-47 -right-3 absolute top-1/10",
  },
];

export const themeColorMesh = {
  springGlobe: "#748420",
  springEye: "#d3e789",
  springCornea: "#748420",

  nightGlobe: "#9D84FF",
  nightEye: "#161616",
  nightCornea: "#9D84FF",

  lightGlobe: "#fefefe",
  lightEye: "#dedede",
  lightCornea: "#fefefe",
};

export const themeOptionsButton: { id: themeOption; color: string }[] = [
  { id: "light", color: "#dedede" },
  { id: "night", color: "#161616" },
  { id: "spring", color: "#d3e789" },
];
