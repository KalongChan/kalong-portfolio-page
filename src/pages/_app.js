import Layout from "@/components/Layout";
import "@/styles/global.scss";

export default function App({Component, pageProps}) {
  return (
    // <Layout>
    <Component {...pageProps} />
    // </Layout>
  );
}
