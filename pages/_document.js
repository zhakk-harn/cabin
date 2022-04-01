import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/global.css" rel="stylesheet"></link>
        <link href="/fonts/T-series/tseries.css" rel="stylesheet" />
        <link href="/fonts/Inter/inter.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
