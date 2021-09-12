import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import ScrollToTop from "react-scroll-up";
import Jumbotron from "./jumbotron";
import { Container, Form, Spinner } from "react-bootstrap";
import Footer from "./footer";
import { getNews } from "./axios/news";
import { News } from "./newsTools";

export default function Newsletter() {
  const [nData, setNData] = useState([]);
  const [year, setYear] = useState("2021");

  const Newz = () => {
    if (!nData.length && !nData.status)
      return (
        <React.Fragment>
          <div style={{ textAlign: "center", marginBottom: "5em" }}>
            <Spinner animation="border" role="status" />
          </div>
        </React.Fragment>
      );
    else if (nData.status === "empty")
      return (
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <p style={{ fontSize: "3vh" }}>No post Yet</p>
        </div>
      );
    else {
      let data = nData.filter((e) => {
        return e.Date.split("-")[0] === year;
      });
      if (data.length > 0)
        return data.map((data, i) => {
          return (
            <News
              key={i}
              heading={data.Heading}
              paragraph={data.Body}
              date={data.Date.split("T")[0]}
              attach={data.Attach}
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
    const NewsData = async () => {
      try {
        let data = await getNews();
        return data.length ? data : { status: "empty" };
      } catch (e) {
        throw e;
      }
    };
    NewsData().then((data) => {
      setNData(data);
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
          name={["News"]}
          subname="NewsLetters and Events"
          background={"/News.jpg"}
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
            </Form.Control>
          </Form.Group>
        </Form>
        <Newz />
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
