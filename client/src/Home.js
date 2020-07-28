import React from "react";
import Navbar from "./navbar";

import Parallax from "./parallax";
import "./css/Home.css";
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
        <Parallax name={["We Create", <br />, "You Rule"]} height={700} />
      </div>
      <Container className="my-3">
        <Content />
        <Gallery />
        <Team />
        <section>
          <Contact />
        </section>
      </Container>
      <footer >
        <Footer />
      </footer>
    </React.Fragment>
  );
}
