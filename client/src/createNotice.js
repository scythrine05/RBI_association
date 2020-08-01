import React from "react";
import { Modal, Button } from "react-bootstrap";
import Editor from "./editor";

export default function createNotice(props) {
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
          Create Notice
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
