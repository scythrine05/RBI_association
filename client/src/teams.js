import React from "react";
import Fade from "react-reveal/Fade";
import "./css/teams.css";
import { Link } from "react-router-dom";
import { MDBRow, MDBCard, MDBCardBody, MDBCardFooter } from "mdbreact";
import { Button } from "react-bootstrap";
import TeamMember from "./teamMember";

export default function teams() {
  return (
    <div>
      <Fade bottom>
        <h1 style={{ textAlign: "center" }}>Our Team</h1>

        <MDBCard className="my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <MDBRow>
              <TeamMember />
              <TeamMember />
              <TeamMember />
              <TeamMember />
            </MDBRow>
          </MDBCardBody>
          <MDBCardFooter>
            <Link exact to="/fullteam">
              <div style={{ margin: "0 auto" }}>
                <Button size="m" variant="">
                  Meet All Team
                </Button>
              </div>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      </Fade>
    </div>
  );
}
