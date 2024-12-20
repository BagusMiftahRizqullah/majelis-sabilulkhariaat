import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="id">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* For other icon types */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
