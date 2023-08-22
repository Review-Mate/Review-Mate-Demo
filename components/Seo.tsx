import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
}

export default function Seo({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
