import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
      </Head>
      <meta charSet='utf-8'></meta>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
