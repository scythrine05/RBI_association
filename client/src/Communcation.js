import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Fade from "react-reveal/Fade";
import Footer from "./footer";
import { Container, Button, Form } from "react-bootstrap";
import Cards from "./communicationCards";
import CreateNotice from "./createNotice";

export default function Communcation() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Jumbotron
          name={["Communication"]}
          subname="Notices and Alerts"
          background={
            '"https://www.vpi-inc.com/wp-content/uploads/2019/02/BLOG_Workplace_Communications_1902.jpg"'
          }
        />
      </div>
      <Fade bottom>
        <Container>
          <Button size="lg" variant="" onClick={() => setModalShow(true)}>
            Create Notice
          </Button>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Year</Form.Label>
              <Form.Control as="select" size="lg" custom>
                <option>2015</option>
                <option>2013</option>
                <option>2019</option>
                <option>2017</option>
                <option selected={true}>2020</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <CreateNotice show={modalShow} onHide={() => setModalShow(false)} />
          <Cards heading="1" paragraph="hey" date="2000" />
          <Cards heading="2" paragraph="hey" date="2003" />
          <Cards heading="3" paragraph="hey" date="2004" />
          <Cards heading="4" paragraph="hey" date="2010" />
          <Cards heading="5" paragraph="hey" date="2018" />
          <Cards heading="6" paragraph="hey" date="2020" />
        </Container>
      </Fade>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
