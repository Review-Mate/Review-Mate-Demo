import Image from 'next/image';

interface LineProps {
  title: string;
  iconSrc: string;
  top: string;
}

export const Line = ({ title, iconSrc, top }: LineProps) => {
  return (
    <div
      className={`invisible xl:visible absolute ${top} left-[55px] w-[140px] h-[140px] rounded-full border bg-white flex flex-col justify-center items-center z-20`}
    >
      <Image src={iconSrc} alt={title} width={40} height={40} />
      <p className='text-gray02 mt-2'>{title}</p>
    </div>
  );
};
