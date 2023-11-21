export const Step1 = () => {
  return (
    <div className='w-[320px]'>
      <h3 className='text-body1 text-[#437B82] font-bold mb-8 text-center'>
        1. 여행객의 만족도 점검
      </h3>
      <div
        className={`w-[320px] bg-white shadow-lg whitespace-pre-wrap rounded-3xl m-auto`}
      >
        <div className='py-6 bg-gray06 px-9 rounded-t-3xl text-body1 font-mid'>
          <p>
            상품을 <br />잘 이용하고 계신가요?
          </p>
        </div>

        <p className='px-6 pt-3'>{welcomeMessage}</p>
        <div className='p-6'>
          <button className='w-full px-8 py-4 font-bold rounded-lg bg-gray06 text-gray01 text-body1'>
            만족도 남기기
          </button>
        </div>
      </div>
    </div>
  );
};

export const welcomeMessage = `안녕하세요. 홍길동님
예약하신 그랜드 워커힐 서울은 어떠
신가요?
간단한 클릭만으로 고객님의 만족도를 
남길 수 있어요. 서비스 품질 향상에 큰
도움이 되요.
불만사항이나 건의사항이 있으시다면,
리뷰메이트에게 말해주세요. 제가 그랜드
워커힐 서울에게 대신 전달해드릴게요!`;
