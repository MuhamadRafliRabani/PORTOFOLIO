type Props = { text: string };

export const LineSplitText = ({ text }: Props) => {
  return (
    <div className="introduce overflWow-hidden block max-w-60 text-wrap text-xl uppercase tracking-wider">
      {text}
    </div>
  );
};
