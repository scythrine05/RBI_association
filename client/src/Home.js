import React from "react";
import Navbar from "./navbar";

import Parallax from "./parallax";
import "./css/home.css";
import { Container } from "react-bootstrap";
import Content from "./content";
import Gallery from "./gallery";
import Team from "./teams";
import Contact from "./contact";
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
        <Parallax name={["We Create", <br />, "You Rule"]} />
      </div>
      <Container className="content my-0">
        <Content />
      </Container>
      <Container className="gallery my-0">
        <Gallery />
      </Container>
      <Container className="gallery my-0">
        <Team />
      </Container>
      <section>
        <Contact />
      </section>
      <footer
        className="gallery my-0"
        style={{
          background: "url(https://wallpapercave.com/wp/wp3400418.jpg)",
        }}
      >
        <Footer />
      </footer>
    </React.Fragment>
  );
}
