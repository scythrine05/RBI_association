import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./css/fullView.css";

export function FullView(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.date}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
