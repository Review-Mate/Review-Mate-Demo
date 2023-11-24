import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { roomList } from '@/data/detail/roomData';
import { useRouter } from 'next/router';
import { WhiteButton } from '@/components/global/button/WhiteButton';
import { BlackButton } from '@/components/global/button/BlackButton';

type Props = {};

export default function Rooms({}: Props) {
  return (
    <div className='flex flex-col mt-20 mb-20'>
      <div className='text-body1 font-bold mb-6'>객실 종류 4개</div>
      {roomList.map((room, index) => (
        <Room
          key={index}
          name={room.name}
          image={room.image}
          price={room.price}
          options={room.options}
        />
      ))}
    </div>
  );
}

interface RoomProps {
  name: string;
  image: StaticImageData;
  price: number;
  options: string[];
}

const Room = ({ name, image, price, options }: RoomProps) => {
  const router = useRouter();
  const formatPrice = price.toLocaleString();

  const reservation = () => {
    const answer = confirm('예약화면으로 이동하시겠습니까?').valueOf();
    if (answer) router.push('/demo/reservation');
    else return;
  };

  return (
    <React.Fragment>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-2/6 lg:w-1/5'>
          <Image
            src={image}
            alt='객실'
            placeholder='blur'
            width={250}
            height={180}
            className='rounded-[10px] hover:opacity-80'
          />
        </div>
        <div className='flex flex-1 flex-col ml-5'>
          <div className='text-subTitle font-mid mb-2 mt-2 sm:mt-0'>{name}</div>
          <div className='flex justify-between'>
            <div className='flex flex-col items-start'>
              <div className='w-[94px] flex justify-center items-center text-body3 bg-lightBlue/20 text-lightBlue mb-8 rounded'>
                예약 무료 취소
              </div>
              <ul className='grid md:grid-cols-1 md:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 list-disc list-inside ml-2'>
                {options.map((option, index) => (
                  <li
                    key={index}
                    className='w-[150px] mb-2.5 text-body3 font-mid'
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-end'>
              <div className='flex mr-7 mb-5 md:mb-0'>
                <div className='text-num3 font-bold mr-1'>{formatPrice}</div>
                <div className='text-num3 font-mid'>원</div>
              </div>
              <div className='flex flex-col'>
                <WhiteButton
                  className='mb-2.5'
                  onClick={() => alert('상품이 장바구니에 담겼습니다.')}
                  title='장바구니'
                />
                <BlackButton onClick={reservation} title='예약하기' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-gray06 my-5' />
    </React.Fragment>
  );
};
