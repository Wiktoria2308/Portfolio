import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/next"

export default function Document() {
  return (
    <Html>
      <Head>
        {" "}
        <link rel="icon" type="image/x-icon" href="/mylogo.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
