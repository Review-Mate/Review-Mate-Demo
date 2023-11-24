import { layoutWidth } from '@/components/Layout';
import { flexCol } from '@/styles/styleUtils';
import Image from 'next/image';
import React from 'react';

export default function ChatBot() {
  return (
    <div>
      <h1 className='text-heading font-bold text-center'>챗봇 체험 안내</h1>
      <div className='absolute left-0 mt-12 bg-gray06 w-full flex flex-col justify-center items-center'>
        <div
          className={`flex flex-row justify-between items-center ${layoutWidth} bg-gray06 mt-8 py-16`}
        >
          <Guide
            title={`QR 코드를 통해\n채널 페이지에서 접속`}
            alt='큐알코드'
            width={150}
            imgSrc='/images/qrcode.png'
          />
          <div className='font-mid text-title'>OR</div>
          <div className='flex flex-row gap-9'>
            <Guide
              title={`카카오톡 우측 상단의\n돋보기 모양 클릭`}
              alt='이미지1'
              imgSrc='/images/kakao1.png'
            />
            <Guide
              title={`검색창에 '리뷰메이트'를\n 검색`}
              alt='이미지2'
              imgSrc='/images/kakao2.png'
            />
          </div>
          <Line />
          <Guide
            title={`채널을 추가하고\n대화창으로 이동해 체험`}
            alt='이미지3'
            imgSrc='/images/kakao3.png'
          />
        </div>
      </div>
    </div>
  );
}

interface GuideProps {
  title: string;
  alt: string;
  imgSrc: string;
  width?: number;
  height?: number;
}

const Guide = ({
  title,
  imgSrc,
  alt,
  width = 200,
  height = 150,
}: GuideProps) => {
  return (
    <div className={`${flexCol}`}>
      <Image src={imgSrc} alt={alt} width={width} height={height} />
      <p className='text-center font-mid mt-4 whitespace-pre-line'>{title}</p>
    </div>
  );
};

const Line = () => {
  return <div className='w-[1px] h-[300px] bg-gray03' />;
};
