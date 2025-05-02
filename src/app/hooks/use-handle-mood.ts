import { useAtom } from "jotai";
import { haveMood } from "./context";
import { haveMoodOption } from "../libs/Index";

export const useHandleMood = () => {
  const [mood, setMood] = useAtom(haveMood);

  const handleMoodChange = (newMood: haveMoodOption) => {
    setMood(newMood);
  };

  return { handleMoodChange, mood };
};
