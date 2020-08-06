import React from "react";
import { Form, Button } from "react-bootstrap";

import Fade from "react-reveal/Fade";

const FormPage = () => {
  return (
    <React.Fragment>
      <Fade botton>
        {" "}
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="email" placeholder="Full name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control as="select" custom>
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
            />
          </Form.Group>
          <Button type="submit" variant="" size="lg">
            Send
          </Button>{" "}
        </Form>
      </Fade>
    </React.Fragment>
  );
};

export default FormPage;
