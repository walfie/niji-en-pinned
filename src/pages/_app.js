import "../../styles/globals.css";
import "react-image-lightbox/style.css";
import Head from "next/head";

const title = "Nijisanji EN Pinned Tweets";
const description = "Image gallery of Nijisanji EN pinned tweets";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="./favicon.svg" />

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
