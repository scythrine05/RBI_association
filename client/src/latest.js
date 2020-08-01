import React from "react";
import { Button, CardDeck } from "react-bootstrap";
import Cards from "./communicationCards";
import Fade from "react-reveal/Fade";

export default function latest() {
  return (
    <div className="content">
      <Fade bottom>
        <h1>Latest</h1>
        <CardDeck>
          <Cards />
          <Cards />
          <Cards />
        </CardDeck>
        <Button
          size="lg"
          style={{ textAlign: "center", marginTop: "20px" }}
          variant=""
          href="/communication"
        >
          Show More
        </Button>
      </Fade>
    </div>
  );
}
