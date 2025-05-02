import { useAtom } from "jotai";
import { openCard } from "./context";

const useHandleOpen = () => {
  const [isOpen, setIsOpen] = useAtom(openCard);

  const handleOpen = (name: string) => {
    setIsOpen((prev) => ({
      name,
      open: prev.name === name ? !prev.open : true,
    }));
  };

  return { handleOpen, isOpen };
};

export default useHandleOpen;
