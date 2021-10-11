import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
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
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <main>
      <Gallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((img) => ({
                ...img,
                srcset: img.srcSet,
                caption: img.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </main>
  );
}
