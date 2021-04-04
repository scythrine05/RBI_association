import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Paperclip } from "react-bootstrap-icons";
import "./css/fullView.css";

export function FullView(props) {
  const CheckAttach = () => {
    if (props.attach)
      return (
        <a
          href={process.env.PUBLIC_URL + `/uploads/${props.attach}`}
          download={props.attach}
        >
          <Button>
            <Paperclip />
          </Button>
        </a>
      );
    return null;
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{ fontSize: "15px" }}
          id="contained-modal-title-vcenter"
        >
          {props.date}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{props.heading}</h2>
        <pre className="paragraph">{props.paragraph}</pre>
      </Modal.Body>
      <Modal.Footer>
        <CheckAttach />
      </Modal.Footer>
    </Modal>
  );
}
