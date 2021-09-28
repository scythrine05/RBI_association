import React from "react";
import Navbar from "./navbar";
import ScrollToTop from "react-scroll-up";
import Jumbotron from "./jumbotron";
import { Container } from "react-bootstrap";
import Footer from "./footer";

import "./css/content.css";
import "./css/Home.css";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div>
        <Jumbotron
          name={["About Us"]}
          subname="RBI OFFICERS' ASSOCIATION"
          background={"/About.jpg"}
        />
      </div>
      <Container className="my-3">
        <p style={{ textAlign: "left" }}>
          Established in 1949 Reserve Bank of India Officers’ Association
          (RBIOA) and is the largest and only Association representing officers
          (DR & Merit Channel) of all grades from Grade A to Executive Director.
          RBIOA is also the only fully democratic Association where Office
          bearers and members of General Council and Central Committee are
          elected as per the rules provided in the constitution of RBIOA. The
          General Secretary is the Chief Executive and Principal Spokesperson of
          the Association (Rule 18.1).
          <hr />
          Article 3 of the RBIOA Constitution and Rules provides the objects of
          the Association as follows:
          <br />
          <ol type="i">
            <li>
              To encourage and foster the ideal of service and to promote
              fellowship among the officers and to take such steps as are
              necessary to improve the professional knowledge and expertise of
              the officer fraternity as a whole with a view to enabling the Bank
              to discharge the obligations to the nation laid on it under the
              various statutes;{" "}
            </li>
            <li>
              To promote social, cultural and intellectual fellowship among the
              officers and other staff of the Bank;{" "}
            </li>
            <li>
              To establish and maintain a link between the Bank's officers and
              its Administration;{" "}
            </li>
            <li>
              To promote and safeguard the interests of officers of the Bank
              including securing improvements in any or all of their service
              conditions;{" "}
            </li>
            <li>
              To institute welfare measures for the benefit of members and their
              families;{" "}
            </li>
            <li>
              To establish and maintain liaison with the Associations I Unions
              of various categories of officers and staff with the Bank or with
              the Associations or officers of other banks and other institutions
              and to promote a common bond of fellowship among them;{" "}
            </li>
            <li>
              To publish journals, bulletins, notices etc., or to promote other
              forms of public relations incidental or conducive to securing the
              objects of the Association;{" "}
            </li>
            <li>
              To raise funds by subscriptions or otherwise, including borrowings
              towards securing the objectives as set out above;{" "}
            </li>
            <li>
              To provide legal assistance to members in matters connected with
              their employment provided they are of common interest to officers;
              and initiate appropriate action as deemed fit and proper whenever
              considered necessary to protect the interest of the officers'
              community and image of the Association; and
            </li>
            <li>
              To generally do all things as are necessary and incidental to the
              attainment of the above objectives.
            </li>
          </ol>
        </p>
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
