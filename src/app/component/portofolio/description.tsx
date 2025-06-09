import { DescriptionItem } from "@/app/libs/Index";

const Description: React.FC<{ descriptions: DescriptionItem[] }> = ({
  descriptions,
}) => (
  <>
    {descriptions.map((item, index) => (
      <p key={index} className="opacity-70">
        {item.name}: <span className="block text-[11px]">{item.value}</span>
      </p>
    ))}
  </>
);

export default Description;
