import React, { useState, useContext } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { authContext } from "./contexts/AuthContext";
import { loginUser, logoutUser } from "./axios/login";
import "./css/log.css";

import { Link } from "react-router-dom";

export default function Log() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setMsgState(0);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgState, setMsgState] = useState(0);

  const { setAuthData, auth } = useContext(authContext);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setMsgState(0);
      setAuthData(1);
      handleClose();
    } catch (error) {
      setMsgState(1);
    }
    setPassword("");
  };

  const Msg = (props) => {
    if (props.state === 1)
      return <Alert variant="danger"> Email/Password is incorrect </Alert>;
    return null;
  };

  const onLogOut = () => {
    logoutUser();
    setAuthData(0);
  }; //clearing the context

  return (
    <>
      <Button size="m" variant="" onClick={auth === 0 ? handleShow : onLogOut}>
        {auth === 0 ? "Login" : "Logout"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "3.5vh" }}>Login User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Msg state={msgState} />
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
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="" type="submit">
              Login
            </Button>
            <Link to="/signup">
              <Form.Text>Create an Account</Form.Text>
            </Link>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
