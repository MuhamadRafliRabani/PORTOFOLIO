import { useAtom } from "jotai";
import { mainTheme } from "./context";
import { themeOption } from "../libs/Index";

export const useHandleTheme = () => {
  const [theme, setTheme] = useAtom(mainTheme);

  const setHandleTheme = (theme: themeOption) => {
    setTheme(theme);
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  return { theme, setHandleTheme };
};
