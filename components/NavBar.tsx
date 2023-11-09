import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import logo from '@/public/images/logo.svg';
import { useLogout } from '@/hooks/useLogout';
import { useLoginContext } from 'context/LoginContext';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  const { isLogin } = useLoginContext();
  useEffect(() => {
    console.log('로그인 상태가 변경되었습니다:', isLogin);
  }, [isLogin]);
  const { handleLogout } = useLogout();

  return (
    <nav className='flex flex-row items-center justify-between mt-5 mb-12'>
      <div className='flex flex-col sm:flex-row sm:items-center'>
        <Link href='/' className='mr-7'>
          <Image src={logo} alt='로고' width={115} height={40} />
        </Link>
        <div className='flex flex-row mt-5 sm:mt-0'>
          <div className='mr-7'>
            <Link href='/demo/pre-trip/reviewList'>리뷰 목록 체험</Link>
          </div>
          <div className='mr-7'>
            <Link href='/demo/reservation'>리뷰 작성 체험</Link>
          </div>
          <div className='mr-7'>
            <Link href='/demo/reservation'>챗봇 체험</Link>
          </div>
          <div>
            <Link href='/guide/startGuide'>개발자 문서</Link>
          </div>
        </div>
      </div>

      <div>
        {isLogin ? (
          <button
            className='w-16 h-[40px] flex items-center'
            onClick={() =>
              handleLogout(() => {
                router.push('/login');
              })
            }
          >
            로그아웃
          </button>
        ) : (
          <Link href='/login'>
            <div className='w-16 h-[40px] flex items-center'>로그인</div>
          </Link>
        )}
        <div className='sm:hidden w-1 h-[40px]'></div>
      </div>
    </nav>
  );
}
