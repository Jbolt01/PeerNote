import Document, { Head, Html, Main, NextScript } from 'next/document';
// import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#15081C" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/assets/favicon.png"
            type="image/png"
          />
          <script async defer data-website-id="336ace5b-04c9-4992-9e97-3cdacbeb428c" src="https://umami.vijayrs.com/umami.js"></script>
          <script defer data-domain="peernote.co" src="https://plausible.vijayrs.com/js/plausible.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
