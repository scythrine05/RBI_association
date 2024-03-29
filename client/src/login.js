import React, { useState, useContext } from "react";
import {
  Button,
  Modal,
  Form,
  Alert,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { authContext } from "./contexts/AuthContext";
import { loginUser, logoutUser } from "./axios/login";
import "./css/log.css";

import { Link } from "react-router-dom";

export default function Log() {
  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleClose = () => {
    setMsgState(0);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgState, setMsgState] = useState(0);

  const { setAuthData, auth } = useContext(authContext);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(email, password);
      setMsgState(0);
      setAuthData(1);
      handleClose();
    } catch (error) {
      setMsgState(1);
    }
    setLoading(false);
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
      <button
        size="sm"
        className="primary"
        onClick={auth === 0 ? handleShow : onLogOut}
      >
        {auth === 0 ? "Login" : "Logout"}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login User</Modal.Title>
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

            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type={showPass ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button onClick={() => setShowPass(!showPass)}>
                {showPass ? <EyeSlashFill /> : <EyeFill />}
              </Button>
            </InputGroup>
            <Button variant="" type="submit">
              {loading ? (
                <Spinner size="sm" animation="border" variant="dark" />
              ) : (
                "Login"
              )}
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
