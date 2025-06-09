import { useAtom } from "jotai";
import { animateReveleDone, openPorto } from "./context";

export const useReveleAnimateCondion = () => {
  const [status, setStatus] = useAtom(animateReveleDone);

  return { status, setStatus };
};

export const useOpenPorto = () => {
  const [open, isOpen] = useAtom(openPorto);

  return { open, isOpen };
};
