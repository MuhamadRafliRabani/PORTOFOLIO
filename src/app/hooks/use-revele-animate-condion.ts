import { useAtom } from "jotai";
import { animateReveleDone } from "./context";

export const useReveleAnimateCondion = () => {
  const [status, setStatus] = useAtom(animateReveleDone);

  return { status, setStatus };
};
