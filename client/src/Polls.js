import React, { Component } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import ScrollToTop from "react-scroll-up";
import { Container } from "react-bootstrap";

export default class Polls extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>{" "}
        <div>
          <Jumbotron
            name={["Polls"]}
            subname="Polls and Voting"
            background={"/Polls.jpg"}
          />
        </div>
        <Container>
          <h1 style={{ textAlign: "center" }}>Not Available</h1>
        </Container>
        <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
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
}
