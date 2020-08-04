import React from "react";
import { Button, CardDeck } from "react-bootstrap";
import Cards from "./communicationCards";
import Fade from "react-reveal/Fade";

import { Link } from "react-router-dom";

export default function latest() {
  return (
    <div className="content">
      <Fade bottom>
        <h1>Latest</h1>
        <CardDeck>
          <Cards
            heading="1"
            paragraph="hey"
            date="2000"
            img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
          />
          <Cards
            heading="2"
            paragraph="hey"
            date="2003"
            img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
          />
          <Cards
            heading="3"
            paragraph="hey"
            date="2004"
            img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
          />
        </CardDeck>
        <Link to="/communication">
        <Button
          size="lg"
          style={{ textAlign: "center", marginTop: "20px" }}
          variant=""
        >
          Show More
        </Button>
        </Link>
      </Fade>
    </div>
  );
}
