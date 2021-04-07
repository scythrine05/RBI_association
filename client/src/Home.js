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
      </header>{" "}
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
          <h1 className="contact" syle={{ textAlign: "center" }}>
            Contact Us
          </h1>
          <Alert variant="success">
            <p style={{ fontSize: "16.7px" }}>Email: abc@gmail.com </p>
            <hr />
            <p style={{ fontSize: "16.7px" }}>Phone: 729310310884 </p>
            <hr />
            <p style={{ fontSize: "16.7px" }}>
              Headquarter: near jj shop, Andheri, Mumbai, Maharastra, 830023{" "}
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
