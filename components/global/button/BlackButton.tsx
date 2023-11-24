import { Button, ButtonProps } from "./BasicButton";

export const BlackButton = ({
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
      className={`${className} border border-black bg-black text-white`}
    />
  );
};
