import "@/styles/global.scss";
import {selfIntroduction} from "@/config";
import Head from "next/head";

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Kalong Chan</title>
        <meta name="description" content={selfIntroduction} />
        <meta property="og:image" content="/Projects/portfoliopage.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
