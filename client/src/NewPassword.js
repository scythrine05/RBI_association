import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Fade from "react-reveal/Fade";
import { Container, Form, Button } from "react-bootstrap";

export default function NewPassword() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <Container style={{ marginTop: "12em", marginBottom: "12em" }}>
        <Fade bottom>
          <h1 style={{ textAlign: "center" }}>Change Password</h1>
          <Form>
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder="current password" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="new password" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="confirm password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Change
            </Button>
          </Form>
        </Fade>
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
