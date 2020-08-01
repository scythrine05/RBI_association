import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import "./css/Profile.css";
import { Container, Button } from "react-bootstrap";
import Footer from "./footer";
import Fade from "react-reveal/Fade";

export default function Profile() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Jumbotron
          name={["Profile"]}
          subname="Your Information"
          background={
            '"https://freshome.com/wp-content/uploads/2014/12/paint_GettyImages-1149521093-2048x1365.jpg"'
          }
        />
      </div>
      <Fade bottom>
        <Container>
          <div className="card-container">
            <span className="pro">Admin</span>
            <img
              className="round"
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/Shaktikanta_Das%2C_IAS.jpg"
              alt="user"
              height="180px"
              width="220px"
            />
            <h3 className="name">Shaktikanta Das</h3>
            <h6 className="post">CEO RBI</h6>
            <ul className="points_ul" style={{ listStyleType: "none" }}>
              <li className="points">
                Chief Executive Officer of India's central bank
              </li>
              <li className="points">
                the ex-officio chairperson of its Central Board of Directors
              </li>
            </ul>
            <div className="buttons">
              <Button
                className="primary"
                activeStyle="primary"
                style={{
                  margin: "10px",
                  height: "48px",
                  lineHeight: "30px",
                  background: "transparent",
                }}
                href="/profile/new_password"
              >
                Change Password
              </Button>
              <button className="primary">Logout</button>
            </div>
            <div className="foot"></div>
          </div>
        </Container>
      </Fade>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
