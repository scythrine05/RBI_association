import React, { useState, useCallback, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import ScrollToTop from "react-scroll-up";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Image } from "react-bootstrap-icons";
import { Container, Button, Form } from "react-bootstrap";
import { getImages } from "./axios/gallery";
import AddPhoto from "./addPhoto";

export default function FullGallery() {
  const [modalShow, setModalShow] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [iData, setIData] = useState([]);
  const [year, setYear] = useState("2021");

  const Empty = () => {
    if (!iData.length)
      return (
        <React.Fragment>
          <div style={{ textAlign: "center", marginTop: "5%" }}>
            <p style={{ fontSize: "3vh" }}>No photos</p>
          </div>
        </React.Fragment>
      );
    return null;
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  useEffect(() => {
    const ImagesData = async () => {
      try {
        let data = await getImages();
        return data;
      } catch (e) {
        throw e;
      }
    };
    ImagesData().then((data) => {
      data.map((d, i) => {
        d[
          "src"
        ] = `https://rbioa-assets.sgp1.digitaloceanspaces.com/Gallery/${d["ImageFile"]}`;
        d["width"] = 3.3;
        d["height"] = 3;
        delete d["ImageFile"];
        return (d["key"] = i);
      });
      let newData = data.filter((e) => {
        return e.UploadDate.split("-")[0] === year;
      });
      setIData(newData);
    });
  }, [year]);

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
          background={"/Gallery.jpg"}
        />
      </div>
      <Container style={{ marginBottom: "12em" }}>
        <button
          className="primary"
          size="lg"
          onClick={() => setModalShow(true)}
        >
          <Image />
        </button>

        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Year</Form.Label>
            <Form.Control
              onChange={(e) => setYear(e.target.value)}
              as="select"
              size="lg"
              custom
            >
              <option>2022</option>
              <option selected={true}>2021</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <AddPhoto show={modalShow} onHide={() => setModalShow(false)} />
        <Empty />
        <Gallery photos={iData} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={iData.map((x) => ({
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
