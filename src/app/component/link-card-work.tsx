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
    <div className="space-y-2">
      <ScrambleText
        text="RECENT WORK"
        onClick={() => useHandleScrollToBottom()}
        onMouseEnter={() => showTooltip("Scroll to see more")}
        onMouseLeave={hideTooltip}
        className="block text-sm font-extralight tracking-widest"
      />
      <Image
        src="/image/anflix-1.webp"
        width={300}
        height={200}
        alt="project"
        className="h-50 w-60 rounded-xl border border-white object-cover object-left"
        onMouseEnter={() => showTooltip("Preview Project")}
        onMouseLeave={hideTooltip}
      />
    </div>
  );
};

export default RecentWork;
