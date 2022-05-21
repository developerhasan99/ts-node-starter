import Head from "next/head";

function SeoHead() {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Social Media Dashboard With Theme Switcher</title>
      <link
        rel="shortcut icon"
        href="./favicon-32x32.png"
        type="image/x-icon"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    </Head>
  );
}

export default SeoHead;
