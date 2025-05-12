import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { haveMoodOption, themeOption } from "../libs/Index";

export const openCard = atom({ name: "", open: false });

export const mainTheme = atomWithStorage<themeOption>("theme", "night");

export const haveMood = atomWithStorage<haveMoodOption>("haveMood", "false");

export const tooltipsVisisble = atom<boolean>(true);
export const tooltipsText = atom("");
