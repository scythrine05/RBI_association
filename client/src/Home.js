import React from "react";
import Navbar from "./navbar";
import ScrollToTop from "react-scroll-up";
import Jumbotron from "./jumbotron";
import "./css/Home.css";
import { Container, Alert } from "react-bootstrap";
import Content from "./content";
import Latest from "./latest";
import Team from "./teams";
import ILinks from "./importantLinks";
import SAssoc from "./sisterAssociation";
import Footer from "./footer";
export default function Home() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div>
        <Jumbotron
          name={["Welcome To"]}
          subname="RBI Officers' Association"
          background={"/Home.jpg"}
        />
      </div>
      <Container className="my-3">
        <div className="latestContent">
          <Content />
          <Container className="latest">
            <Latest />
          </Container>
        </div>
        <Team />
        <ILinks />
        <SAssoc />
        <section>
          {" "}
          <h1 className="contact-h1" syle={{ textAlign: "center" }}>
            Contact Us
          </h1>
          <Alert variant="success" className="contact-body">
            <p>Email : rbioamumbai@gmail.com@gmail.com </p>
            <hr />
            <p>
              Office : RBI Officers’ Association, Reserve Bank of India, 3rd
              Floor, Main Building, Mumbai – 400 001
            </p>
          </Alert>
        </section>
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
