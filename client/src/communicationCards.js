import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./css/communicationCards.css";
import { FullView } from "./fullView";

export default function CommunicationCards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "15px" }}>{props.date}</Card.Title>
          <Card.Text>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
          </Card.Text>
          <Button variant="" onClick={() => setModalShow(true)}>
            View
          </Button>
          <FullView
            img={props.img}
            date={props.date}
            heading={props.heading}
            paragraph={props.paragraph}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
