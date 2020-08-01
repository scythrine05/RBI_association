import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import AMembers from "./approvedMembers";
import PMembers from "./pendingMembers";
import { Container, Tab, Table, Tabs } from "react-bootstrap";

export default function members() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Jumbotron
          name={["Members"]}
          subname="Admin's Members List"
          background={
            '"https://blogs.staffs.ac.uk/student-blogs/files/2015/12/Students-sitting-together-on-campus-working-on-projects.png"'
          }
        />
      </div>
      <Container>
        <Tabs
          defaultActiveKey="pending"
          variant="pills"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="approved" title="Approved Members">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <AMembers />
                <AMembers />
                <AMembers />
                <AMembers />
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="pending" title="Pending Members">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                <PMembers />
                <PMembers />
                <PMembers />
                <PMembers />
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
