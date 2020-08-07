import React, { useContext } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import "./css/Profile.css";
import { Container, Button } from "react-bootstrap";
import Footer from "./footer";

import { Link } from "react-router-dom";
import { authContext } from "./contexts/AuthContext";

export default function Profile() {
  const { setAuthData } = useContext(authContext);

  const onLogOut = () => {
    setAuthData(null);
  }; //clearing the context

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
            <Link to="/profile/new_password">
              <Button
                className="primary"
                activeStyle="primary"
                style={{
                  margin: "10px",
                  height: "48px",
                  lineHeight: "30px",
                  background: "transparent",
                }}
              >
                Change Password
              </Button>
            </Link>
            <button className="primary" onClick={onLogOut}>
              Logout
            </button>
          </div>
          <div className="foot"></div>
        </div>
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
