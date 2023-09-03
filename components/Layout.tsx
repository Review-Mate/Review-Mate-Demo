import React from 'react';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='h-full px-[5%] md:px-[10%] xl:px-[20%] '>
      <NavBar />
      {children}
    </div>
  );
}
