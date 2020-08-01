import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Fade from "react-reveal/Fade";
import { Container, Form, Button, Col } from "react-bootstrap";

export default function NewAccount() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <Container style={{ marginTop: "12em", marginBottom: "12em" }}>
        <Fade bottom>
          <h1 style={{ textAlign: "center" }}>Become a Member</h1>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Create an Account
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
