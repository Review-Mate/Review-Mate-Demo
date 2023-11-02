import { motion } from 'framer-motion';

export interface ButtonProps {
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


