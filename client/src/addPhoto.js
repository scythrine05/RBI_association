import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function AddPhoto(props) {
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
          style={{ textAlign: "center", fontSize: "30px" }}
          id="contained-modal-title-vcenter"
        >
          Add Photo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {" "}
        <Button style={{ margiTop: "20px" }} variant="">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
