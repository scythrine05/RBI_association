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
            <Cards
              heading="1"
              paragraph="hey"
              date="2000"
              img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
            />
            <Cards
              heading="2"
              paragraph="hey"
              date="2003"
              img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
            />
            <Cards
              heading="3"
              paragraph="hey"
              date="2004"
              img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
            />
            <Cards
              heading="4"
              paragraph="hey"
              date="2010"
              img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
            />
            <Cards
              heading="5"
              paragraph="hey"
              date="2018"
              img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
            />
            <Cards
              heading="6"
              paragraph="hey"
              date="2020"
              img="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903820-rbi-rep.jpg"
            />
          </CardColumns>
        </Container>
      </Fade>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
