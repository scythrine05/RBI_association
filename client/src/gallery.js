import React, { useState, useCallback } from "react";

import Fade from "react-reveal/Fade";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Button } from "react-bootstrap";
import "./css/gallery.css";

export default function Pgallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery">
      <Fade bottom>
        <h1 style={{ textAlign: "center" }}>Gallery</h1>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <Button
          size="lg"
          style={{ textAlign: "center", marginTop: "20px" }}
          variant=""
          href="/gallery"
        >
          See all Photos
        </Button>
      </Fade>
    </div>
  );
}
