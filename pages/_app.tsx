import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={`${notoSans.className} h-full`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
}
