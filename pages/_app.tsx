import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR } from 'next/font/google';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${notoSans.className} h-full`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
