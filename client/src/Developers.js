import React from "react";
import Navbar from "./navbar";
import ScrollToTop from "react-scroll-up";
import Jumbotron from "./jumbotron";
import { SocialIcon } from "react-social-icons";
import "./css/Home.css";
import { Container } from "react-bootstrap";
import { MDBRow, MDBCard, MDBCol, MDBCardBody } from "mdbreact";
import Footer from "./footer";
export default function Home() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Jumbotron
          name={["Developers"]}
          subname="The Engineers"
          background={"/Developers.jpg"}
        />
      </div>
      <Container className="my-3">
        <MDBCard className="my-5 px-1 pb-5 text-center">
          <MDBCardBody>
            <MDBRow className="text-md-left">
              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <img
                    tag="img"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                    className="rounded-circle z-depth-1 img-fluid"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <br />
                  <br />
                  <br />
                  <h4 className="font-weight-bold mb-3">Hardik Goyal</h4>
                  <SocialIcon
                    style={{ transform: "scale(0.7,0.7)", cursor: "pointer" }}
                    network="linkedin"
                    className="social-btn"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/-hardikgoyal/",
                        "_blank"
                      )
                    }
                  />
                  <SocialIcon
                    style={{ transform: "scale(0.7,0.7)", cursor: "pointer" }}
                    network="github"
                    className="social-btn"
                    onClick={() =>
                      window.open("https://github.com/hardik-goyal", "_blank")
                    }
                  />
                </MDBCol>
              </MDBCol>

              <MDBCol lg="6" md="12" className="mb-5">
                <MDBCol md="4" lg="6" className="float-left">
                  <img
                    tag="img"
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                    className="rounded-circle z-depth-1 img-fluid"
                    alt="Sample avatar"
                  />
                </MDBCol>
                <MDBCol md="8" lg="6" className="float-right">
                  <br />
                  <br />
                  <br />
                  <h4 className="font-weight-bold mb-3">Rohan Murmu</h4>
                  <SocialIcon
                    style={{ transform: "scale(0.7,0.7)", cursor: "pointer" }}
                    network="linkedin"
                    className="social-btn"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/rohan-murmu-6474b61a0/",
                        "_blank"
                      )
                    }
                  />
                  <SocialIcon
                    style={{ transform: "scale(0.7,0.7)", cursor: "pointer" }}
                    network="github"
                    className="social-btn"
                    onClick={() =>
                      window.open("https://github.com/scythrine05", "_blank")
                    }
                  />
                </MDBCol>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
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
