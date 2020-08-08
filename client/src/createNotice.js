import React from "react";
import { Modal, Button } from "react-bootstrap";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorTools";

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
        <EditorJs tools={EDITOR_JS_TOOLS} />;
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
