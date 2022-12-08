import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"/>
      </body>
    </Html>
  )
}