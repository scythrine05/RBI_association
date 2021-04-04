import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { newUser } from "./axios/signup";
import Loading from "react-fullscreen-loading";
import Swal from "sweetalert2";

export default function NewMember() {
  let initState = {
    SamadhanID: null,
    Name: null,
    OfficeLocation: null,
    Email: null,
  };

  const [userData, setUserData] = useState(initState);
  const [msgState, setMsgState] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const setData = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let emptyField = false;
    Object.entries(userData).map(([key, value]) => {
      if (value == null || value === "") emptyField = true;
      return null;
    });
    if (emptyField) {
      setMsgState(1);
      setMessage("Fields should not be Empty");
      return null;
    } else {
      e.target.reset();
      setLoading(true);
      let idCheck = await newUser(userData);
      if (idCheck !== 409) {
        setUserData(initState);
        setMsgState(0);
        Swal.fire("Form submitted", "Check your Email", "success").then(() => {
          window.location.reload();
        });
      } else {
        setUserData(initState);
        setMsgState(0);
        Swal.fire(
          "Account Exists",
          "The account with SamadhanID already registered",
          "error"
        ).then(() => {
          window.location.reload();
        });
      }
      setLoading(false);
    }
  };
  const Msg = (props) => {
    if (props.state === 1) return <Alert variant="danger"> {message} </Alert>;
    else if (props.state === 2)
      return <Alert variant="success"> {message} </Alert>;
    return null;
  };

  return (
    <React.Fragment>
      <Loading
        loading={loading}
        background="rgba(0,0,0,0.8)"
        loaderColor="#3498db"
      />
      <h1 style={{ textAlign: "center" }}>New Member</h1>
      <Msg state={msgState} />
      <Form onSubmit={submitForm}>
        <Form.Group controlId="SamadhanID">
          <Form.Label>Samadhan ID</Form.Label>
          <Form.Control
            type="text"
            onChange={setData}
            placeholder="Samadhan ID"
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={setData} placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" onChange={setData} placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="OfficeLocation">
          <Form.Label>Office Location</Form.Label>
          <Form.Control
            type="text"
            onChange={setData}
            placeholder="Office Location"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create an Account
        </Button>
      </Form>
    </React.Fragment>
  );
}
