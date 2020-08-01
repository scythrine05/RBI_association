import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FullView } from "./fullView";
import Editor from "./editor";

export function CreateNewsLetter(props) {
  return (
    <Modal
      {...props}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ fontSize: "30px" }}
          id="contained-modal-title-vcenter"
        >
          Create News Letter
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Editor />
      </Modal.Body>
      <Modal.Footer>
        {" "}
        <Button style={{ margiTop: "20px" }} variant="">
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function News(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <Card
        style={{
          marginBottom: "50px",
        }}
      >
        <Card.Header style={{ textAlign: "center" }}>{props.date}</Card.Header>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {props.heading}
          </Card.Title>
          <Card.Text style={{ textAlign: "center", fontSize: "17px" }}>
            {props.paragraph}
          </Card.Text>
          <Button variant="" onClick={() => setModalShow(true)}>
            View
          </Button>

          <FullView
            date={props.date}
            heading={props.heading}
            paragraph={props.paragraph}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}