import { X } from "lucide-react";
import { CardLayoutProps } from "../libs/Index";
import useHandleOpen from "../hooks/use-handle-open";

const CardLayout = ({ children, ...props }: CardLayoutProps) => {
  const id = props.id;
  const { handleOpen, isOpen } = useHandleOpen();

  return (
    <div
      {...props}
      className={`GT-america border-primary relative inline-block h-fit min-h-20 w-fit min-w-60 space-y-2 rounded-lg border bg-[#161616] p-4 uppercase tracking-wider opacity-0 shadow-xl ${id === "about-card" ? "max-w-60" : "max-w-72"}`}
    >
      {children}

      <button
        onClick={() =>
          handleOpen(
            isOpen.name === "about-card" ? "about-card" : "contact-card",
          )
        }
        className="absolute right-1 top-1 cursor-pointer"
      >
        <X className="size-6 rounded-full stroke-1" />
      </button>
    </div>
  );
};

export default CardLayout;
