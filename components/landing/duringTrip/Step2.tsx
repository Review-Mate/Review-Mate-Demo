import Image from 'next/image';

export const Step2 = () => {
  return (
    <div className='w-[310px]'>
      <h3 className='text-body1 text-[#437B82] font-bold mb-8 text-center'>
        2. 불만, 개선사항 등을 관리인에게 전달
      </h3>
      <div className={`w-full flex flex-col gap-5`}>
        <TooTip>이번 상품은 어떠셨나요?</TooTip>
        <div className='flex flex-row w-full gap-1'>
          {[1, 2, 3, 4, 5].map((idx) => (
            <StarButton key={idx} num={idx} />
          ))}
        </div>
        <TooTip right>
          <div className='flex flex-row gap-1'>
            {[1, 2, 3, 4, 5].map((idx) => {
              return <StarImage size={24} key={idx} />;
            })}
          </div>
        </TooTip>
        <TooTip>어떤 부분이 가장 만족스러우신가요?</TooTip>
        <div className='flex flex-row w-full gap-1'>
          <MessageBox>청결</MessageBox>
          <MessageBox>친절도</MessageBox>
          <MessageBox>시설</MessageBox>
          <MessageBox>없음</MessageBox>
        </div>
        <TooTip right>친절도</TooTip>
        <div className='relative'>
          <TooTip>
            <div>어떤 부분이 가장 불만족스러우신가요?</div>
          </TooTip>
        </div>
      </div>
    </div>
  );
};

interface TooltipProps {
  children: React.ReactNode;
  right?: boolean;
}

export const TooTip = ({ children, right = false }: TooltipProps) => {
  const arrowStyle = `absolute top-5 w-0 h-0 border-[8px] border-transparent`;
  const rightArrowStyle = '-right-5 border-l-[15px] border-l-primary';
  const leftArrowStyle = '-left-5 border-r-[15px] border-r-white';

  return (
    <div className='w-full'>
      <div
        className={`relative drop-shadow-lg ${
          right ? 'float-right' : 'float-left'
        }`}
      >
        <div
          className={`${arrowStyle} ${
            right ? rightArrowStyle : leftArrowStyle
          }`}
        />
        <div
          className={`${
            right ? 'bg-primary text-white float-right' : 'bg-white float-left'
          } p-4 rounded-2xl`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface MessageBoxProps {
  children?: React.ReactNode;
}

export const MessageBox = ({ children }: MessageBoxProps) => {
  return (
    <div
      className={`flex flex-row justify-center items-center bg-white shadow-lg px-3 h-[40px] rounded-xl`}
    >
      {children}
    </div>
  );
};

const StarImage = ({ size = 15 }: { size?: number }) => {
  return <Image src='/images/star.svg' alt='별점' width={size} height={size} />;
};

const StarButton = ({ num = 1 }: { num: number }) => {
  let stars = Array.from({ length: num }, (_, idx) => idx + 1);
  return (
    <>
      {
        <MessageBox>
          {stars.map((idx) => {
            return <StarImage key={idx} />;
          })}
        </MessageBox>
      }
    </>
  );
};
