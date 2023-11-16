import { layoutPaddingStyle } from '@/components/Layout';
import Image from 'next/image';
import React from 'react';

const boxStyle = 'text-white rounded-sm py-[1px] px-[3px]';
const greenBox = `${boxStyle} bg-green02`;
const purpleBox = `${boxStyle} bg-purple02`;
const blueBox = `${boxStyle} bg-blue02`;
const redBox = `${boxStyle} bg-red02`;

export default function Middle() {
  return (
    <div className='flex flex-row items-center justify-center gap-5'>
      <Process
        title='분석 전 리뷰'
        icon='/icons/analysis_chat.svg'
        content={() => (
          <>
            주차공간이 넓었어요
            <br /> 그런데 방안에 바퀴벌레가
            <br /> 있었어요
          </>
        )}
        bottom={() => <></>}
      />

      <Arrow />
      <Process
        title='키워드 속성 분석'
        icon='/icons/analysis_bubble.svg'
        content={() => (
          <>
            <span className={greenBox}>주차공간</span>
            이 넓었어요
            <br /> 그런데 방안에 <span className={greenBox}>바퀴벌레</span>가
            <br /> 있었어요
          </>
        )}
        bottom={() => (
          <div className='flex flex-row gap-2'>
            <p className={`${squareStyle} border-green02 text-green02`}>
              속성
              <br />
              분석
            </p>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-row gap-1'>
                <span className={greenBox}>주차공간</span>
                <DoubleArrow />
                <p>편의시설</p>
              </div>
              <div className='flex flex-row gap-1'>
                <span className={greenBox}>바퀴벌레</span>
                <DoubleArrow />
                <p>청결</p>
              </div>
            </div>
          </div>
        )}
      />

      <Arrow />
      <Process
        title='키워드 추출'
        icon='/icons/analysis_stat.svg'
        content={() => (
          <>
            <span className={purpleBox}>주차</span>공간이 넓었어요
            <br /> 그런데 방안에 <span className={purpleBox}>바퀴벌레</span>가
            <br /> 있었어요
          </>
        )}
        bottom={() => (
          <div className='flex flex-row gap-2'>
            <p className={`${squareStyle} border-purple02 text-purple02`}>
              키워드
              <br />
              추출
            </p>
            <div className='flex flex-col justify-between items-start'>
              <span className={purpleBox}>주차</span>
              <span className={purpleBox}>바퀴벌레</span>
            </div>
          </div>
        )}
      />

      <Arrow />
      <Process
        title='긍부정 분석'
        icon='/icons/analysis_search.svg'
        content={() => (
          <>
            <span className={blueBox}>주차공간이 넓었어요</span>
            <br /> 그런데 <span className={redBox}>방안에 바퀴벌레가</span>
            <br /> <span className={redBox}>있었어요</span>
          </>
        )}
        bottom={() => (
          <div className='h-full flex flex-col justify-between items-start'>
            <div className='flex flex-row gap-2'>
              <p className='text-blue02 font-bold'>긍정</p>
              <span className={blueBox}>주차공간이 넓었어요</span>
            </div>
            <div className='flex flex-row gap-2'>
              <p className='text-red02 font-bold'>부정</p>
              <span className={redBox}>방안에 바퀴벌레가 있었어요</span>
            </div>
          </div>
        )}
      />
    </div>
  );
}

interface ProcessProps {
  title: string;
  icon: string;
  content: () => React.ReactNode;
  bottom: () => React.ReactNode;
}

interface TooltipProps {
  content: () => React.ReactNode;
}

const Process = ({
  title,
  icon,
  content,
  bottom = () => <></>,
}: ProcessProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row items-center mb-4'>
        <Image src={icon} alt='아이콘' width={34} height={34} />
        <div className='text-body2 ml-1'>{title}</div>
      </div>
      <Tooltip content={content} />
      <div className='w-full h-[64px] mt-6'>{bottom()}</div>
    </div>
  );
};

const Tooltip = ({ content }: TooltipProps) => {
  return (
    <div className='relative'>
      <div className='absolute -top-5 left-[111px] w-0 h-0 border-[8px] border-b-[15px] border-transparent border-b-white' />
      <div className='flex items-center justify-center text-body2 w-[230px] h-[130px] bg-white rounded-xl drop-shadow-lg'>
        <p>{content()}</p>
      </div>
    </div>
  );
};

const Arrow = () => {
  return (
    <Image
      src='/icons/analysis_arrow.svg'
      alt='화살표'
      width={15}
      height={44}
      className='mb-[30px]'
    />
  );
};

const DoubleArrow = () => {
  return (
    <Image
      src='/icons/analysis_double_arrow.svg'
      alt='>>'
      width={24}
      height={24}
    />
  );
};

const squareStyle =
  'w-[64px] h-[64px] rounded grid place-items-center border text-center leading-5';
