import React, { useContext, useState, useEffect } from "react";
import Navbar from "./navbar";
import Loader from "react-loader-spinner";
import Jumbotron from "./jumbotron";
import "./css/Profile.css";
import { Container, Button } from "react-bootstrap";
import Footer from "./footer";
import { userProfile } from "./axios/profile";
import { logoutUser } from "./axios/login";
import { Link } from "react-router-dom";
import { authContext } from "./contexts/AuthContext";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const { setAuthData } = useContext(authContext);

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await userProfile();
        setUserData(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [userData]);

  const CheckAdmin = () => {
    if (userData.IsAdmin === 1)
      return (
        <span className="pro" style={{ background: "#febb0b" }}>
          Admin
        </span>
      );
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    );
  };
  const onLogOut = () => {
    logoutUser();
    setAuthData(0);
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
          <CheckAdmin />
          <h3 className="name">{userData.Name}</h3>
          <ul className="points_ul" style={{ listStyleType: "none" }}>
            <li className="Email"> {userData.Email}</li>
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
