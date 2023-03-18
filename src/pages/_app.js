import "@/styles/global.scss";
import Head from "next/head";

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Kalong Chan</title>
        <meta name="description" content="Some random meta description" />
        <meta property="og:image" content="/img/about_img.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
