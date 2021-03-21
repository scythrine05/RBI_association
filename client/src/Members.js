import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Loader from "react-loader-spinner";
import Footer from "./footer";
import AMembers from "./approvedMembers";
import PMembers from "./pendingMembers";
import AdMembers from "./adminMembers";
import { pendingMembers, admin, approvedMembers } from "./axios/members";
import { Container, Tab, Table, Tabs } from "react-bootstrap";
import ScrollToTop from "react-scroll-up";
import "./css/members.css";

export default function Members() {
  const [pData, setPData] = useState([]);
  const [aData, setAData] = useState([]);
  const [aDData, setADData] = useState([]);

  const PendingData = async () => {
    try {
      let data = await pendingMembers();
      if (!data.length) setPData([]);
      else setPData(data);
    } catch (e) {
      console.log(e);
    }
  };
  const Pending = () => {
    if (!pData.length)
      return (
        <React.Fragment>
          <td />
          <td />
          <td>
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={3000} //3 secs
            />
          </td>
        </React.Fragment>
      );
    else
      return pData.map((data, i) => {
        return (
          <PMembers
            key={i}
            Id={data.SamadhanID}
            Name={data.Name}
            Email={data.Email}
          />
        );
      });
  };
  const Approved = () => {
    if (!pData.length)
      return (
        <React.Fragment>
          <td />
          <td />
          <td>
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={3000} //3 secs
            />
          </td>
        </React.Fragment>
      );
    else
      return aData.map((data, i) => {
        return (
          <AMembers
            key={i}
            Id={data.SamadhanID}
            Name={data.Name}
            Email={data.Email}
          />
        );
      });
  };
  const Admin = () => {
    if (!pData.length)
      return (
        <React.Fragment>
          <td />
          <td />
          <td>
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={50}
              width={50}
              timeout={3000} //3 secs
            />
          </td>
        </React.Fragment>
      );
    else
      return aDData.map((data, i) => {
        return (
          <AdMembers
            key={i}
            Id={data.SamadhanID}
            Name={data.Name}
            Email={data.Email}
          />
        );
      });
  };
  const ApprovedData = async () => {
    try {
      let data = await approvedMembers();
      if (!data.length) setAData([]);
      else setAData(data);
    } catch (e) {
      console.log(e);
    }
  };
  const AdminData = async () => {
    try {
      let data = await admin();
      if (!data.length) setADData([]);
      else setADData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    PendingData();
    ApprovedData();
    AdminData();
  }, [pData, aData, aDData]);
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
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <Admin />
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="approved" title="Approved Members">
            &nbsp;
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
                <Approved />
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="pending" title="Pending Members">
            &nbsp;
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
                <Pending />
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
