import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import AMembers from "./approvedMembers";
import PMembers from "./pendingMembers";
import AdMembers from "./adminMembers";
import {Container, Tab, Table, Tabs, Form } from "react-bootstrap";
import ScrollToTop from "react-scroll-up";

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
          <Tab eventKey="admin" title="Admin Members">
            &nbsp;
            <Form>
    <Form.Group controlId="formBasicSearch">
    <Form.Control type="text" placeholder="Search" />
     </Form.Group>
    </Form>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <AdMembers />
                <AdMembers />
                <AdMembers />
                <AdMembers />
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="approved" title="Approved Members">
            &nbsp;
            <Form>
    <Form.Group controlId="formBasicSearch">
    <Form.Control type="text" placeholder="Search" />
     </Form.Group>
    </Form>
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
             &nbsp;
            <Form>
    <Form.Group controlId="formBasicSearch">
    <Form.Control type="text" placeholder="Search" />
     </Form.Group>
    </Form>
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
      <ScrollToTop showUnder={160}>
        <img
          src="/scrollTop.png"
          width="60"
          height="60"
          className="scrollTop d-inline-block align-top"
          alt="RBIOA logo"
        />
      </ScrollToTop>
    </React.Fragment>
  );
}
