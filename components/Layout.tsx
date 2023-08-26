import React from 'react';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <div className='h-full px-[20%]'>
      <NavBar />
      {children}
    </div>
  );
}
