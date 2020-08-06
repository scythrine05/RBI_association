import React from "react";
import Navbar from "./navbar";

import Fade from "react-reveal/Fade";
import Jumbotron from "./jumbotron";
import "./css/Home.css";
import { Container } from "react-bootstrap";
import Suggestion from "./suggest";
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
          name={["Suggestion"]}
          subname="Suggestion and Feedback"
          background={
            '"https://cdn0.careeraddict.com/uploads/article/32158/001suggestion1.jpg"'
          }
        />
      </div>
      <div className="body">
        <Fade bottom>
          <Container className="my-3">
            <section style={{ textAlign: "left" }}>
              <Suggestion />
            </section>
          </Container>
        </Fade>
      </div>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
