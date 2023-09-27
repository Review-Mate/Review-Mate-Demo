import { useRouter } from 'next/router';
import React, { useState } from 'react';

type Props = {};

//
// 상품 구매 페이지는 데모를 위해 임시로 만들어둔 페이지입니다.
//
export default function Purchase({}: Props) {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [kakaoId, setKakaoId] = useState('');

  const validationCheck = () => {
    if (name.length === 0) alert('이름을 입력해주세요');
    else if (phoneNum.length !== 11)
      alert('휴대전화 번호를 정확히 입력해주세요');
    else if (kakaoId.length < 3) alert('카카오 아이디를 정확히 입력해주세요');

    return name.length > 0 && phoneNum.length === 11 && kakaoId.length >= 3;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validationCheck()) return;

    const date = new Date();
    const token =
      phoneNum.substring(7, 11) + kakaoId.substring(0, 3) + date.getTime();
    localStorage.setItem('loginToken', token);
    localStorage.setItem('name', name);
    localStorage.setItem('phoneNum', phoneNum);
    localStorage.setItem('kakaoId', kakaoId);

    router.push('/demo/beforeReview');
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-title font-bold mb-20 mt-11 animate-appear1 opacity-0'>
        리뷰 작성을 위해 간단한 정보를 입력해주세요
      </h1>
      <form
        onSubmit={handleSubmit}
        className='border rounded-t-3xl pt-11 p-7 w-3/4'
      >
        <Input label='이름' value={name} setValue={setName} />
        <Input
          label='휴대전화'
          value={phoneNum}
          setValue={setPhoneNum}
          type='tel'
        />
        <Input label='카카오 아이디' value={kakaoId} setValue={setKakaoId} />
        <button type='submit' className='btn-primary mt-7 float-right'>
          로그인
        </button>
      </form>
    </div>
  );
}

interface InputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

const Input = ({ label, value, setValue, type = 'text' }: InputProps) => {
  return (
    <div className='flex flex-col mb-6'>
      <label className='text-body2 mb-3' htmlFor={label}>
        {label}
      </label>
      <input
        className='border border-solid border-gray04 rounded-md p-2 px-3'
        type={type}
        id={label}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
