import { motion } from 'framer-motion';

interface ButtonProps {
  title: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  title,
  onClick,
  width = 143,
  height = 50,
  className,
}: ButtonProps) => {
  return (
    <motion.button
      className={`${className} flex justify-center items-center mr-2.5 rounded font-mid hover:opacity-80`}
      onClick={onClick}
      whileTap={{ opacity: 0.5 }}
      style={{ width: width, height: height }}
    >
      {title}
    </motion.button>
  );
};

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
