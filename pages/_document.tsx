import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <link href="/favicons/site.webmanifest" rel="manifest" />
      <link href="/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <meta content="#ffffff" name="theme-color" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
