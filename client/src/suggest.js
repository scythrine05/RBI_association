import React, { useState, useEffect } from "react";
import { getData, postSuggest } from "./axios/suggest";
import { Form, Button, Alert } from "react-bootstrap";
import Loading from "react-fullscreen-loading";
import Swal from "sweetalert2";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("1");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgState, setMsgState] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name === "" || email === "" || subject === "" || message === "") {
        setMsgState(1);
      } else {
        setLoading(true);
        await postSuggest(name, email, subject, message);
        Swal.fire("<h4>Sent</h4>", "<h6>Message sent</h6>", "success");
        setMsgState(0);
        setMessage("");
      }
    } catch (e) {
      setMsgState(2);
    }
    setLoading(false);
  };
  const Msg = (props) => {
    if (msgState === 1)
      return <Alert variant="danger"> Fields should not be empty </Alert>;
    if (msgState === 2)
      return <Alert variant="danger"> Something went wrong </Alert>;
    return null;
  };

  useEffect(() => {
    const getAll = async () => {
      let data = await getData();
      return data;
    };
    getAll().then((data) => {
      setEmail(data.Email);
      setName(data.Name);
    });
  }, []);
  return (
    <React.Fragment>
      <Loading
        loading={loading}
        background="rgba(0,0,0,0.8)"
        loaderColor="#3498db"
      />
      <Msg />
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder={name} readOnly />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder={email} readOnly />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            style={{ resize: "none" }}
            as="textarea"
            rows="7"
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
        </Form.Group>
        <Button type="submit" variant="" size="lg">
          Send
        </Button>{" "}
      </Form>
    </React.Fragment>
  );
};

export default FormPage;
