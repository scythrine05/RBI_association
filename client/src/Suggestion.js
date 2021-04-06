import React from "react";
import Navbar from "./navbar";
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
          background={"Suggest.jpg"}
        />
      </div>
      <div className="body">
        <Container className="my-3">
          <section style={{ textAlign: "left" }}>
            <Suggestion />
          </section>
        </Container>
      </div>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
