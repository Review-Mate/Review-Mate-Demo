import React from 'react';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
}

export const layoutPaddingStyle = 'px-[5%] xl:px-[18%]';
export const layoutWidth = 'sm:w-[600px] md:w-[700px] lg:w-[1100px] mx-auto px-[10px]';

export default function Layout({ children }: Props) {
  return (
    <>
      <div className={`h-full ${layoutWidth}`}>
        <NavBar />
        <div className='pt-[100px]'>{children}</div>
      </div>
    </>
  );
}
