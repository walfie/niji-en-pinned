import Head from "next/head";
import ImageGallery from "react-image-gallery";
import tweets from "../tweets.json";
import users from "../users.json";

const images = tweets.flatMap((tweet) => {
  return tweet.image_urls.map((url) => {
    return {
      original: url,
      thumbnail: url,
      description: tweet.text,
      thumbnailLabel: "@" + users[tweet.user_id],
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
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          thumbnailPosition={"top"}
        />
      </main>
    </div>
  );
}
