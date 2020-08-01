import React from "react";
import Navbar from "./navbar";

import Jumbotron from "./jumbotron";
import "./css/Home.css";
import { Container, Button } from "react-bootstrap";
import Content from "./content";
import Latest from "./latest";
import Gallery from "./gallery";
import Team from "./teams";
import ILinks from "./importantLinks";
import SAssoc from "./sisterAssociation";
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
        <Jumbotron
          name={["Welcome To"]}
          subname="RBI Officer's Association"
          background={
            '"https://cdn2.hubspot.net/hubfs/3987289/microsoft_teams_top_business_benefits-2.jpg"'
          }
        />
      </div>
      <Container className="my-3">
        <Button variant="" size="lg" block href="/members">
          Checkout Members
        </Button>
        <Latest />
        <Content />
        <Gallery />
        <Team />
        <ILinks />
        <SAssoc />
        <section>
          <Contact />
        </section>
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
