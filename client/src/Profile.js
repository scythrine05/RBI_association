import React, { useContext, useState, useEffect } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import "./css/Profile.css";
import { Container, Button, Spinner } from "react-bootstrap";
import Footer from "./footer";
import { userProfile } from "./axios/profile";
import { logoutUser } from "./axios/login";
import { Link } from "react-router-dom";
import { CreateNotice } from "./commsTools";
import { CreateNewsLetter } from "./newsTools";
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
  const { setAuthData } = useContext(authContext);

  const Loading = () => {
    if (userData === "") return <Spinner animation="grow" />;
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
  }, [userData]);

  const CheckAdmin = () => {
    if (userData.IsAdmin === 1)
      return (
        <React.Fragment>
          <h1>
            <PatchCheckFill color="#3498db" />
          </h1>
          <div className="post-area">
            <div>
              <Link to="/members">
                <Button
                  size="lg"
                  variant=""
                  onClick={() => setCommsModalShow(true)}
                >
                  <People />
                </Button>
              </Link>
            </div>
            <div>
              <Button
                size="lg"
                variant=""
                onClick={() => setNewsModalShow(true)}
              >
                <Newspaper />
              </Button>
            </div>
            <div>
              <Button
                size="lg"
                variant=""
                onClick={() => setCommsModalShow(true)}
              >
                <Sticky />
              </Button>
            </div>
            <div>
              <Button size="lg" variant="">
                <BarChart />
              </Button>
            </div>
          </div>
        </React.Fragment>
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
