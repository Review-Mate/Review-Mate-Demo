import Image from 'next/image';

interface GreenButtonProps {
  title: string;
  iconSrc: string;
  onClick: () => void;
}

export const GreenButton = ({ title, iconSrc, onClick }: GreenButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='flex flex-row items-center bg-primary px-6 py-4 rounded-md gap-3'
    >
      <Image src={iconSrc} alt='리스트 아이콘' width={24} height={24} />
      <p className='text-body1 text-white font-bold'>{title}</p>
    </button>
  );
};
