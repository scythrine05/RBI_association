import React, { useState } from "react";
import { postContact } from "./axios/suggest";
import { Form, Button, Alert, Container } from "react-bootstrap";
import Loading from "react-fullscreen-loading";
import Recaptcha from "react-recaptcha";
import Swal from "sweetalert2";

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [msgState, setMsgState] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name === "" || email === "" || message === "" || !verify) {
        setMsgState(1);
      } else {
        setLoading(true);
        await postContact(name, email, message);
        Swal.fire("<h4>Sent</h4>", "<h6>Message sent</h6>", "success");
        setMsgState(0);
        setName("");
        setEmail("");
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

  const loadCaptcha = () => {
    console.log("https://www.google.com/recaptcha/about/");
  };
  return (
    <React.Fragment>
      <Loading
        loading={loading}
        background="rgba(0,0,0,0.8)"
        loaderColor="#3498db"
      />

      <br />

      <Container className="my-3">
        <h1 className="iL-h1" style={{ textAlign: "center" }}>
          Contact Us
        </h1>
        <section style={{ textAlign: "left" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
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
              <Recaptcha
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                render="explicit"
                onloadCallback={loadCaptcha}
                verifyCallback={() => setVerify(true)}
              />
            </Form.Group>
            <Msg />
            <Button type="submit" variant="" size="lg">
              Send
            </Button>
          </Form>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default FormPage;
