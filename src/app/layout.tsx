"use client";

import "./globals.css";
import Navbar from "./component/navbar";
import { useAtom } from "jotai";
import { mainTheme } from "./hooks/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme] = useAtom(mainTheme);

  return (
    <html lang="en" data-theme={theme} className="scroll-smooth">
      <body className="bg-primary text-secondary selection:bg-background selection:text-gray-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
