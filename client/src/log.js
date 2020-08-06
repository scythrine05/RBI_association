import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { authContext } from "./contexts/AuthContext";
import "./css/log.css";

export default function Log({ history }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const { setAuthData, auth } = useContext(authContext);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setAuthData(email); // Here we send a request to our API and in response, we receive the user token.
    handleClose(); //after saving email the user will be sent to Home
  };

  const onLogOut = () => {
    setAuthData(null);
  }; //clearing the context

  return (
    <>
      <Button
        size="m"
        variant=""
        onClick={auth.data == null ? handleShow : onLogOut}
      >
        {auth.data == null ? "Login" : "Logout"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "30px" }}>Login User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onFormSubmit}>
            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email ID"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="" type="submit">
              Login
            </Button>
            <a href="/signup">
              <Form.Text>Create an Account</Form.Text>
            </a>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
