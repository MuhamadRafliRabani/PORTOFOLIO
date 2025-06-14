"use client";

import "./globals.css";
import Navbar from "./component/navbar";
import { useAtom } from "jotai";
import { mainTheme } from "./hooks/context";
import FloatingTooltip from "./component/ui/tooltips";
import SmoothScroll from "./libs/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme] = useAtom(mainTheme);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        data-theme={theme}
        className="bg-background GT-america-thin text-text selection:bg-background selection:text-gray-950"
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        {/* <FloatingTooltip /> */}
      </body>
    </html>
  );
}
