import React from "react";
import Navbar from "./navbar";
import Info from "./info";
import Parallax from "./parallax";
import "./css/Profile.css";
import { Container } from "react-bootstrap";
import Footer from "./footer";

export default function Profile() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Parallax name={["Your Profile", <br />, "Info"]} />
      </div>
      <Container>
        <Info />
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
