import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import "./css/Home.css";
import { Container } from "react-bootstrap";
import Footer from "./footer";
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import TeamMember from "./teamMember";
import ScrollToTop from "react-scroll-up";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Jumbotron
          name={["Team"]}
          subname="Meet Our whole Team"
          background={"/Team.jpg"}
        />
      </div>
      <Container className="my-3">
        <MDBCard className="my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <MDBRow>
              <TeamMember
                name="A.Krishna Gopal"
                post="President"
                img="AKrishnaGopal.jpg"
              />
              <TeamMember
              name="Madhav N. Kale"
              post="Vice President"
              img="MadhavN.Kale.jpg"
            />
              <TeamMember
                name="Rajesh Singh"
                post="Vice President"
                img="RajeshSingh.jpg"
              />
            <TeamMember
                name="Jeet Pathak"
                post="General Secretary"
                img="JeetPathak.JPG"
              />
              <TeamMember
                name="Anoop V Raj"
                post="Secretary"
                img="AnoopVRaj.jpg"
              />
              <TeamMember
                name="Jaikar Mishra"
                post="Secretary"
                img="JaikarMishra.jpg"
              />
              <TeamMember
                name="Shashidharan P."
                post="Secretary"
                img="ShashidharanP.jpg"
              />
              <TeamMember
                name="Amit Kumar"
                post="Secretary,Mumbai"
                img="AmitKumar.jpeg"
              />
              <TeamMember
                name="Nitin Jain"
                post="Treasurer"
                img="NitinJain.png"
              />
              <TeamMember
                name="Baljinder Singh"
                post="Member, Central Committee"
                img="BaljinderSingh.jpeg"
              />
              <TeamMember
                name="Aravind M"
                post="CC Member"
                img="ARAVINDM.jpg"
              />
              <TeamMember
                name="Dilip Kataria"
                post="CC Member"
                img="profile.jpg"
              />
              <TeamMember
                name="Dharambir Taparwal"
                post="CC member"
                img="DharambirTaparwal.png"
              />
              <TeamMember
                name="Doma Sarath Chand"
                post="CC Member"
                img="DomaSarathChand.JPG"
              />
              <TeamMember
                name="Nitin Shrivastava"
                post="CC Member"
                img="NitinShrivastava.JPG"
              />
              <TeamMember
                name="Pramod Kumar Kalita"
                post="CC Member"
                img="PramodKumarKalita.jpg"
              />
              <TeamMember
                name="Ravi Kaithwas"
                post="CC Member"
                img="RaviKaithwas.jpg"
              />
              <TeamMember
                name="Sidharth Prakash"
                post="CC Member"
                img="SidharthPrakash.jpg"
              />
              <TeamMember
                name="Sudhir Kumar Pandey"
                post="CC Member"
                img="SudhirKumarPandey.jpg"
              />
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
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
