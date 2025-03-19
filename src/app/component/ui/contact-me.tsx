"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

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
      <span className="text-xs tracking-wider">
        MUHAMADRAFLIRABANI@GMAIL.COM
      </span>
    </Link>
  );
};

export default ContactMe;
