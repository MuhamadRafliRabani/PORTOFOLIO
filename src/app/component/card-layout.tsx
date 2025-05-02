import { X } from "lucide-react";
import { CardLayoutProps } from "../libs/Index";
import useHandleOpen from "../hooks/use-handle-open";

const CardLayout = ({ children, ...props }: CardLayoutProps) => {
  const id = props.id;
  const { handleOpen, isOpen } = useHandleOpen();

  return (
    <div
      {...props}
      className={`GT-america border-primary relative inline-block h-fit space-y-2 rounded-lg border bg-[#161616] p-4 uppercase tracking-wider opacity-0 shadow-sm ${id === "about-card" ? "ms-5 mt-5 w-60" : "min-w-70 w-60"}`}
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
