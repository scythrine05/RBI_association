import React from "react";
import { Modal } from "react-bootstrap";
import "./css/fullView.css";

export function FullView(props) {
  const CheckAttach = () => {
    if (props.attach)
      return (
        <>
        <a
          href={`https://rbioa-assets.sgp1.digitaloceanspaces.com/Attachments/${props.attach}`}
          download={props.attach}
        >
          <button style={{fontSize:'2vh'}} className="primary">
        {props.attach}
          </button>
        </a>
        </>
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
        <h2 style={{ whiteSpace: "pre-wrap", marginBottom: "3ch" }}>
          {props.heading}
        </h2>
        <pre className="paragraph">{props.paragraph}</pre>
      </Modal.Body>
      <Modal.Footer>
        <CheckAttach />
      </Modal.Footer>
    </Modal>
  );
}
