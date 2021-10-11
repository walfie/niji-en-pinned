import Head from "next/head";
import Gallery from "react-grid-gallery";
import tweets from "../tweets.json";
import users from "../users.json";

const images = tweets.flatMap((tweet) => {
  return tweet.images.map((image) => {
    return {
      src: image.url,
      thumbnail: image.url,
      caption: tweet.text,
      thumbnailWidth: image.width,
      thumbnailHeight: image.height,
      tags: [
        {
          title: "username",
          value: `@${users[tweet.user_id]}`,
        },
      ],
    };
  });
});

export default function Home() {
  return (
    <div className="container" style={{ padding: 0, margin: 0 }}>
      <Head>
        <title>Nijisanji EN Pinned Tweets</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main style={{ padding: 0, margin: 0 }}>
        <Gallery images={images} enableImageSelection={false} />
      </main>
    </div>
  );
}
