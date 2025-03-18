import { X } from "lucide-react";
import { CardLayoutProps } from "../libs/Index";

const CardLayout = ({ children, ...props }: CardLayoutProps) => {
  return (
    <div
      {...props}
      className="GT-america relative inline-block h-fit min-h-20 w-fit min-w-60 max-w-60 space-y-2 rounded-lg border border-[var(--bg-primary)] bg-[#161616] p-4 uppercase tracking-wider shadow-xl"
    >
      {children}

      <X className="absolute right-1 top-1 size-6 rounded-full stroke-1" />
    </div>
  );
};

export default CardLayout;
