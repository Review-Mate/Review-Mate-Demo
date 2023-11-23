import { Button, ButtonProps } from "./BasicButton";

export const WhiteButton = ({
  title,
  onClick,
  width,
  height,
  className,
}: ButtonProps) => {
  return (
    <Button
      title={title}
      onClick={onClick}
      width={width}
      height={height}
      className={`${className} border border-gray04 bg-white text-black hover:bg-gray-50`}
    />
  );
};