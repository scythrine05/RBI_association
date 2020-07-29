import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import Fade from "react-reveal/Fade";

export default function info() {
  return (
    <React.Fragment>
      <Card
        style={{
          width: "18rem",
          margin: "0 auto",
          float: "none",
          marginBottom: "10px",
          border: "none",
        }}
      >
        <Fade bottom>
          <Card.Img
            variant="top"
            style={{ borderRadius: "50%", border: "5px solid black" }}
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/Shaktikanta_Das%2C_IAS.jpg"
          />
          <Card.Body>
            <Card.Title>Shaktikanta Das, IAS</Card.Title>
            <Card.Text style={{ textAlign: "left", fontSize: "17px" }}>
              Governor of RBI
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Governor of the Reserve Bank of India</ListGroupItem>
            <ListGroupItem>
              {" "}
              Chief Executive Officer of India's central bank
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              ex-officio chairperson of its Central Board of Directors
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">shaktikantaDas123@gmail.com</Card.Link>
          </Card.Body>
        </Fade>
      </Card>
    </React.Fragment>
  );
}
