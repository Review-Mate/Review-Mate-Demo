import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Purchase() {
  const router = useRouter();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const validationCheck = () => {
    if (id.length === 0) alert('아이디를 입력해주세요');
    else if (pw.length === 0) alert('비밀번호를 입력해주세요');

    return id.length > 0 && pw.length > 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validationCheck()) return;

    const result = await signIn('credentials', {
      id: id,
      password: pw,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-title font-bold mb-16 mt-11 animate-appear1 opacity-0'>
        로그인
      </h1>
      <form
        onSubmit={handleSubmit}
        className='rounded-t-3xl pt-11 p-7 w-full sm:w-[500px] bg-gray07'
      >
        <Input label='아이디' value={id} setValue={setId} />
        <Input label='비밀번호' value={pw} setValue={setPw} type='password' />
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
