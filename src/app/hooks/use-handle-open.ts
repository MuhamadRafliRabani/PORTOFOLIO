import { useOpen } from "./context";

const useHandleOpen = () => {
  const { setIsOpen, isOpen } = useOpen();

  const handleOpen = (name: string) => {
    setIsOpen((prev) => ({
      name,
      open: prev.name === name ? !prev.open : true,
    }));
  };

  return { handleOpen, isOpen };
};

export default useHandleOpen;
