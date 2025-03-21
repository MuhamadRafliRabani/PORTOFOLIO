import React from "react";
import CardLayout from "./card-layout";
import ContactMe from "./ui/contact-me";
import { ShoppingBag } from "lucide-react";
import { ScrambleText } from "./ui/scrumble-text";

const ContactCard = () => {
  return (
    <CardLayout
      id="contact-card"
      className={`z-70 relative top-0 w-fit transition-all duration-300`}
    >
      <p className="block text-sm">CONTACT</p>
      <form action="">
        <ContactMe />

        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="border-second flex grow basis-1/3 items-center space-x-2 rounded-md border p-3 text-xs">
            <ShoppingBag className="size-3" />
            <ScrambleText text="LINKEDIN" className="mx-auto" />
          </div>
          <div className="border-second flex grow basis-1/3 items-center space-x-2 rounded-md border p-3 text-xs">
            <ShoppingBag className="size-3" />
            <ScrambleText text="INSTAGRAM" className="mx-auto" />
          </div>
          <div className="border-second flex basis-full items-center space-x-2 rounded-md border p-3 text-xs">
            <ShoppingBag className="size-3" />

            <ScrambleText text="YOUTUBE" className="mx-auto" />
          </div>
        </div>
      </form>
    </CardLayout>
  );
};

export default ContactCard;
