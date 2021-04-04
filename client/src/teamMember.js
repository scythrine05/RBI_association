import React from "react";

import { MDBCol } from "mdbreact";
export default function teamMember() {
  return (
    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
      <img
        tag="img"
        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
        className="rounded-circle z-depth-1 img-fluid"
        alt="Sample avatar"
      />
      <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
      <p className="text-uppercase blue-text">Backend Developer</p>
    </MDBCol>
  );
}
