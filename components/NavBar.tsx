import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import logo from '@/public/images/logo.svg';
import { useLogout } from '@/hooks/useLogout';
import { useLoginContext } from 'context/LoginContext';
import { useRouter } from 'next/router';
import { layoutPaddingStyle } from './Layout';

export default function NavBar() {
  const router = useRouter();
  const { isLogin } = useLoginContext();
  const { handleLogout } = useLogout();

  return (
    <nav className={`left-0 fixed w-full bg-white z-10 ${layoutPaddingStyle}`}>
      <div className='flex flex-row items-center justify-between my-5'>
        <div className='flex flex-col sm:flex-row sm:items-center'>
          <Link href='/' className='mr-7'>
            <Image src={logo} alt='로고' width={140} height={65} />
          </Link>
          <div className='flex flex-row mt-5 sm:mt-0'>
            <Link className='mr-7' href='/demo/pre-trip/reviewList'>
              리뷰 목록 체험
            </Link>
            <Link className='mr-7' href='/demo/during-trip/beforeChatBot'>
              챗봇 체험
            </Link>
            <Link
              className='mr-7'
              href={{
                pathname: '/demo/reservation',
                query: { destination: '/demo/post-trip/reviewWrite' },
              }}
            >
              리뷰 작성 체험
            </Link>
            <Link href='/guide/startGuide'>도입 가이드</Link>
          </div>
        </div>

        <div className='flex items-center p-1 px-2 border rounded text-body3 text-primary border-primary'>
          {isLogin ? (
            <button
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
              <div>로그인</div>
            </Link>
          )}
          {/* <div className='sm:hidden w-1 h-[40px]'></div> */}
        </div>
      </div>
    </nav>
  );
}
