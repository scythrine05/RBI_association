import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Fade from "react-reveal/Fade";
import Footer from "./footer";
import { CardColumns, Container, Button } from "react-bootstrap";
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

          <CreateNotice show={modalShow} onHide={() => setModalShow(false)} />
          <CardColumns>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </CardColumns>
        </Container>
      </Fade>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
