import { MessageBox, TooTip } from './Step2';

export const Step3 = () => {
  return (
    <div className='flex flex-col items-center w-[370px]'>
      <h3 className='text-subTitle text-[#437B82] font-bold mb-8 text-center'>
        3. 문제해결여부 확인 및 관리감독 역할 수행
      </h3>
      <div>
        <div className='flex flex-col float-left gap-5'>
          <div className='flex flex-row px-3 py-2 bg-white shadow-lg rounded-3xl'>
            <div className='flex flex-col gap-2 p-3'>
              <p className='whitespace-pre-line'>{serviceMessage}</p>
              <button className={grayButtonStyle}>건의사항 남기기</button>
              <button className={grayButtonStyle}>남기지 않기</button>
            </div>
          </div>
          <TooTip right>건의사항 남기기</TooTip>
          <TooTip>건의사항을 지금 채팅방에 전송해주세요!</TooTip>
          <TooTip right>이불에 과자부스러기가 있었어요</TooTip>
        </div>
      </div>
    </div>
  );
};

export const serviceMessage = `혹시 불만 사항이나 건의사항이 있으면
채팅창에 전송해주세요! 그랜드 워커힐
서울의 담당자에게 제가 대신 전달해
드릴께요.`;

export const grayButtonStyle =
  'bg-gray06 text-gray01 w-full font-mid py-3 rounded-lg text-center';
