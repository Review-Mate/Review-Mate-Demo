import React from 'react';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <div className='h-full sm:px-[5%] md:px-[10%] xl:px-[20%] '>
      <NavBar />
      {children}
    </div>
  );
}
