import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import tweets from "../../public/tweets.json";
import users from "../../public/users.json";

const images = tweets.flatMap((tweet) => {
  return tweet.images.map((image) => {
    return {
      src: image.url,
      width: image.width,
      height: image.height,
      title: `@${users[tweet.user_id]}`,
    };
  });
});

export default function Home() {
  const [photoIndex, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const nextIndex = () => {
    return (photoIndex + 1) % images.length;
  };

  const prevIndex = () => {
    return (photoIndex + images.length - 1) % images.length;
  };

  return (
    <main>
      <Gallery photos={images} onClick={openLightbox} />
      {viewerIsOpen ? (
        <Lightbox
          animationDuration={50}
          imageTitle={images[photoIndex].title}
          mainSrc={images[photoIndex].src}
          nextSrc={images[nextIndex()].src}
          prevSrc={images[prevIndex()].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => {
            setCurrentImage(prevIndex());
          }}
          onMoveNextRequest={() => {
            setCurrentImage(nextIndex());
          }}
        />
      ) : null}
    </main>
  );
}
