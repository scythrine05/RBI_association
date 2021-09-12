import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import { PollsCards } from "./pollsTools";
import ScrollToTop from "react-scroll-up";
import { getPolls } from "./axios/polls";
import { Container, Spinner, Form } from "react-bootstrap";

export default function Polls() {
  const [pData, setPData] = useState([]);
  const [year, setYear] = useState("2021");

  const Polls = () => {
    if (!pData.length && !pData.status)
      return (
        <React.Fragment>
          <div style={{ textAlign: "center", marginBottom: "5em" }}>
            <Spinner animation="border" role="status" />
          </div>
        </React.Fragment>
      );
    else if (pData.status === "empty")
      return (
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <p style={{ fontSize: "3vh" }}>No post Yet</p>
        </div>
      );
    else {
      let data = pData.filter((e) => {
        return e.Date.split("-")[0] === year;
      });
      if (data.length > 0)
        return data.map((data, i) => {
          return (
            <PollsCards
              key={i}
              question={data.Question}
              options={JSON.parse(data.Answer)}
              date={data.Date.split("T")[0]}
              active={data.Active}
              id={data.PollsID}
              done={data.Done}
            />
          );
        });
      else {
        return (
          <React.Fragment>
            <div style={{ textAlign: "center", marginTop: "5%" }}>
              <p style={{ fontSize: "3vh" }}>No post</p>
            </div>
          </React.Fragment>
        );
      }
    }
  };
  useEffect(() => {
    const PollsData = async () => {
      try {
        let data = await getPolls();
        return data.length ? data : { status: "empty" };
      } catch (e) {
        throw e;
      }
    };

    PollsData().then((data) => {
      setPData(data);
    });
  }, []);

  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Jumbotron
          name={["Polls"]}
          subname="Polls and Voting"
          background={"/Polls.jpg"}
        />
      </div>
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Year</Form.Label>
            <Form.Control
              as="select"
              size="lg"
              onChange={(e) => setYear(e.target.value)}
              custom
            >
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option selected={true}>2021</option>
              <option>2020</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Polls />
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
