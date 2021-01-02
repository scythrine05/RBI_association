import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Container, Tabs, Tab } from "react-bootstrap";
import NewMember from "./newMember";
import ExistingMember from "./existingMember";

export default function NewAccount() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <Container style={{ marginTop: "12em", marginBottom: "12em" }}>
        <Tabs
          defaultActiveKey="newMember"
          variant="pills"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="newMember" title="New Member">
            <NewMember />
          </Tab>
          <Tab eventKey="existingMember" title="Existing Member">
            <ExistingMember />
          </Tab>
        </Tabs>
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
