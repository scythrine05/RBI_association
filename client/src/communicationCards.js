import React from "react";
import { Button, Alert } from "react-bootstrap";
import "./css/communicationCards.css";
import { FullView } from "./fullView";

export default function CommunicationCards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Alert variant="info" style={{ borderRadius: "0px" }}>
        <Alert.Heading style={{ fontSize: "15px" }}>{props.date}</Alert.Heading>
        <h2 style={{ textAlign: "center" }}>{props.heading}</h2>
        <p>{props.paragraph}</p>
        <hr />
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
      </Alert>
    </div>
  );
}
