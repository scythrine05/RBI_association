import React from "react";
import { Card, Button } from "react-bootstrap";
import "./css/communicationCards.css";

export default function communicationCards() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
