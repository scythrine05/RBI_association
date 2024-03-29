import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import PMembers from "./pendingMembers";
import { pendingMembers } from "./axios/members";
import { Container, Table, Spinner } from "react-bootstrap";
import ScrollToTop from "react-scroll-up";
import "./css/members.css";

export default function Members() {
  const [pData, setPData] = useState([]);

  const PendingData = async () => {
    try {
      let data = await pendingMembers();
      return data.length ? data : { status: "empty" };
    } catch (e) {
      console.log(e);
    }
  };
  const Pending = () => {
    if (!pData.length && !pData.status)
      return (
        <React.Fragment>
          <tr>
            <td className="empty" colSpan="5">
              <Spinner animation="border" role="status" />
            </td>
          </tr>
          <tr>
            <td className="empty" colSpan="5">
              {/* Empty margin */}
            </td>
          </tr>
        </React.Fragment>
      );
    else if (pData.status)
      return (
        <React.Fragment>
          <tr>
            <td className="empty" colSpan="5">
              <p>No Request</p>
            </td>
          </tr>
          <tr>
            <td className="empty" colSpan="5">
              {/* Empty margin */}
            </td>
          </tr>
        </React.Fragment>
      );
    else {
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
    }
  };
  useEffect(() => {
    PendingData().then((data) => {
      setPData(data);
    });
  }, []);
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div>
        <Jumbotron
          name={["Members"]}
          subname="Pending Members List"
          background={"/Member.png"}
        />
      </div>
      <Container>
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
