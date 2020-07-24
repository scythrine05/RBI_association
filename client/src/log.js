import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./log.css";

export default function Log() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="m" variant="success" onClick={handleShow}>
        login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="success" type="submit">
              login
            </Button>
            <a href="#signup">
              <Form.Text>Create an Account</Form.Text>
            </a>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
