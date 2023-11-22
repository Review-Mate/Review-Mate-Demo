import React from 'react';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
}

export const layoutPaddingStyle = 'px-[5%] xl:px-[18%]';

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div className={`h-full pt-[130px] ${layoutPaddingStyle}`}>{children}</div>
    </>
  );
}
