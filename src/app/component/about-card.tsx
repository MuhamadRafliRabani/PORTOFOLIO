import Image from "next/image";
import CardLayout from "./card-layout";

const AboutCard = () => {
  return (
    <CardLayout id="about-card">
      <Image
        src="/image/profil.png"
        className="absolute -left-5 -top-5 z-40 size-16 rounded-full border border-white object-cover object-top"
        width={64}
        height={64}
        alt="PROFIL IMAGE"
      />

      <p className="text-primary pt-10 text-xs">MUHAMAD RAFLI RABANI</p>
      <div className="space-y-1.5 text-[10px] font-medium">
        <p>Combining design expertise with Webflow development.</p>
        <p>
          Specialized in crafting experience-driven websites that stand out
          through bold design, seamless motion, and innovative functionality.
        </p>
        <p>
          Currently working as a freelancer on occasion and in-house at studio
          UNCOMMON [Enschede, NL].
        </p>
      </div>
    </CardLayout>
  );
};

export default AboutCard;
