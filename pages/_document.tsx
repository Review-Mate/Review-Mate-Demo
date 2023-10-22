import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
        <meta name="Keywords" content="리뷰, 여행, 리뷰 관리, 여행 리뷰, 리뷰메이트" />
        <meta
          name='Description'
          content='여행상품의 구매 전환율을 상승시키는 리뷰 통합 관리 플랫폼, 리뷰메이트'
        />
        <meta charSet='utf-8' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
