import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { newPassword } from "./axios/new_Password";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Loading from "react-fullscreen-loading";
import Swal from "sweetalert2";

export default function NewPassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [conPass, setConPass] = useState("");
  const [msgState, setMsgState] = useState(0);
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (conPass !== newPass) setMsgState(1);
    else {
      if (newPass.length < 8) setMsgState(2);
      else {
        try {
          setLoading(true);
          await newPassword(oldPass, newPass);
          Swal.fire("Done", "Password is all set", "success");
          setMsgState(0);
        } catch (e) {
          setMsgState(3);
        }
        setNewPass("");
        setOldPass("");
        setConPass("");
      }
      setLoading(false);
    }
  };

  const Msg = (props) => {
    if (props.state === 1)
      return <Alert variant="danger"> Confirm Password not matched </Alert>;
    else if (props.state === 2)
      return <Alert variant="danger"> Password too small </Alert>;
    else if (props.state === 3)
      return <Alert variant="danger"> Something went Wrong </Alert>;

    return null;
  };

  return (
    <React.Fragment>
      <Loading
        loading={loading}
        background="rgba(0,0,0,0.8)"
        loaderColor="#3498db"
      />
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <Container style={{ marginTop: "12em", marginBottom: "12em" }}>
        <h1 style={{ textAlign: "center" }}>Change Password</h1>
        <Msg state={msgState} />
        <Form onSubmit={onFormSubmit}>
          <Form.Group controlId="formCurrentPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="current password"
              value={oldPass}
              onChange={(e) => {
                setOldPass(e.target.value);
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="new password"
              value={newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              value={conPass}
              onChange={(e) => {
                setConPass(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Change
          </Button>
        </Form>
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
