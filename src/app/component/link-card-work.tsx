// components/RecentWork.tsx
"use client";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { tooltipsText, tooltipsVisisble } from "../hooks/context";
import { useHandleScrollToBottom } from "../hooks/useScrollByClick";
import { ScrambleText } from "./ui/scrumble-text";

const RecentWork = () => {
  const setContent = useSetAtom(tooltipsText);
  const setVisible = useSetAtom(tooltipsVisisble);

  const showTooltip = (text: string) => {
    setContent(text);
    setVisible(true);
  };

  const hideTooltip = () => setVisible(false);

  return (
    <div
      onClick={() => useHandleScrollToBottom()}
      style={{ transform: `translateY(300px)` }}
      className="item ms-2 cursor-pointer space-y-2 md:ms-0"
    >
      <ScrambleText
        text="RECENT WORK"
        onMouseEnter={() => showTooltip("Scroll to see more")}
        onMouseLeave={hideTooltip}
        className="block font-extralight tracking-widest md:text-sm"
      />
      <Image
        src="/image/anflix-1.webp"
        width={300}
        height={200}
        alt="project"
        className="md:h-50 h-30 w-37 rounded-xl border border-white object-cover object-left md:w-60"
        onMouseEnter={() => showTooltip("Preview Project")}
        onMouseLeave={hideTooltip}
      />
    </div>
  );
};

export default RecentWork;
