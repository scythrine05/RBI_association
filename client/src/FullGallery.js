import React, { useState, useCallback } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import ScrollToTop from "react-scroll-up";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import { Container, Button, Form } from "react-bootstrap";
import AddPhoto from "./addPhoto";

export default function FullGallery() {
  const [modalShow, setModalShow] = React.useState(false);
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
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Jumbotron
          name={["Gallery"]}
          subname="Association Pictures"
          background={
            '"https://lamantiagallery.com/wp-content/uploads/2019/10/LaMantiaGallery2019-9.jpg"'
          }
        />
      </div>
      <Container style={{ marginBottom: "12em" }}>
        <Button size="lg" variant="" onClick={() => setModalShow(true)}>
          Add Photo
        </Button>

        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Year</Form.Label>
            <Form.Control as="select" size="lg" custom>
              <option>2015</option>
              <option>2013</option>
              <option>2019</option>
              <option>2017</option>
              <option selected={true}>2020</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <AddPhoto show={modalShow} onHide={() => setModalShow(false)} />
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
      </Container>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop showUnder={160}>
        <img
          src="/scrollTop.png"
          width="60"
          height="60"
          className="scrollTop d-inline-block align-top"
          alt="RBIOA logo"
        />
      </ScrollToTop>
    </React.Fragment>
  );
}
