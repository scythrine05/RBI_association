import React, { useContext, useState, useEffect } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import "./css/Profile.css";
import { Container, Spinner, Button } from "react-bootstrap";
import Footer from "./footer";
import { userProfile } from "./axios/profile";
import { logoutUser } from "./axios/login";
import { Link } from "react-router-dom";
import { CreateNotice } from "./commsTools";
import { CreateNewsLetter } from "./newsTools";
import { CreatePolls } from "./pollsTools";

import {
  Newspaper,
  People,
  Sticky,
  BarChart,
  PatchCheckFill,
} from "react-bootstrap-icons";
import { authContext } from "./contexts/AuthContext";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const [commsModalShow, setCommsModalShow] = useState(false);
  const [newsModalShow, setNewsModalShow] = useState(false);
  const [pollsModalShow, setPollsModalShow] = useState(false);
  const { setAuthData } = useContext(authContext);

  const Loading = () => {
    if (userData === "") return <Spinner animation="border" role="status" />;
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await userProfile();
        return data;
      } catch (e) {
        console.log(e);
      }
    };

    fetchData().then((data) => {
      setUserData(data);
    });
  }, []);

  const CheckAdmin = () => {
    if (userData.IsAdmin === 1)
      return (
        <>
          <h1>
            <PatchCheckFill color="#3498db" />
          </h1>
          <div className="post-area">
            <div>
              <Link to="/members">
                <button className="primary" size="lg">
                  <People />
                </button>
              </Link>
            </div>
            <div>
              <button
                className="primary"
                size="lg"
                onClick={() => setNewsModalShow(true)}
              >
                <Newspaper />
              </button>
            </div>
            <div>
              <button
                className="primary"
                size="lg"
                onClick={() => setCommsModalShow(true)}
              >
                <Sticky />
              </button>
            </div>
            <div>
              <button
                className="primary"
                size="lg"
                onClick={() => setPollsModalShow(true)}
              >
                <BarChart />
              </button>
            </div>
          </div>
        </>
      );
    return null;
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
          background={"/Profile.jpg"}
        />
      </div>
      <Container>
        <CreateNotice
          show={commsModalShow}
          onHide={() => setCommsModalShow(false)}
        />
        <CreateNewsLetter
          show={newsModalShow}
          onHide={() => setNewsModalShow(false)}
        />
        <CreatePolls
          show={pollsModalShow}
          onHide={() => setPollsModalShow(false)}
        />
        <div className="card-container">
          <Loading />
          <h3 className="name">{userData.Name}</h3>
          <ul className="points_ul" style={{ listStyleType: "none" }}>
            <li className="Email"> {userData.Email}</li>
          </ul>
          <CheckAdmin />
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
