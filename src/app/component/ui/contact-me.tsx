"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ScrambleText } from "./scrumble-text";

const ContactMe = () => {
  const handelCopy = async () => {
    await navigator.clipboard.writeText("muhamadraflirabani@gmail.com");
    alert("Email has been copied to your clipboard.");
  };

  return (
    <Link
      href="https://mail.google.com/mail/u/0/#inbox?compose=new"
      className="mb-2.5 flex items-center gap-2 border-b border-[#dbdbdb] pb-2"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handelCopy}
    >
      <Mail className="size-3" />
      <ScrambleText
        text="MUHAMADRAFLIRABANI@GMAIL.COM"
        className="text-xs tracking-wider"
        tick={1}
      />
    </Link>
  );
};

export default ContactMe;
