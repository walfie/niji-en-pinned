import "../../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nijisanji EN Pinned Tweets</title>
        <link rel="icon" href="./favicon.svg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
