import React from "react";
import Fade from "react-reveal/Fade";
import "./css/teams.css";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

export default function teams() {
  return (
    <div>
      <Fade bottom>
        <h1 style={{ textAlign: "center" }}>Our Team</h1>

        <MDBCard className="my-5 px-5 pb-5 text-center">
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                />
                <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
                <p className="text-uppercase blue-text">Graphic designer</p>
                <p className="grey-text">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci sed quia non numquam modi tempora
                  eius.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                />
                <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
                <p className="text-uppercase blue-text">Web Developer</p>
                <p className="grey-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  ipsa accusantium doloremque rem laudantium totam aperiam.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                />
                <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                <p className="text-uppercase blue-text">Photographer</p>
                <p className="grey-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim est fugiat nulla id eu
                  laborum.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="instagram" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="dribbble" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                <img
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                />
                <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
                <p className="text-uppercase blue-text">Backend Developer</p>
                <p className="grey-text">
                  Perspiciatis repellendus ad odit consequuntur, eveniet earum
                  nisi qui consectetur totam officia voluptates perferendis
                  voluptatibus aut.
                </p>
                <ul className="list-unstyled mb-0">
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="facebook-f" className="blue-text" />
                  </a>
                  <a href="#!" className="p-2 fa-lg">
                    <MDBIcon fab icon="github" className="blue-text" />
                  </a>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </Fade>
    </div>
  );
}
