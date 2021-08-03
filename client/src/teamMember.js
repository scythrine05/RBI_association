import React from "react";

import { MDBCol } from "mdbreact";
export default function teamMember(props) {
  return (
    <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
      <img
        tag="img"
        src={`/teams/${props.img}`}
        className="rounded-circle z-depth-1 img-fluid"
        alt="Sample avatar"
      />
      <h5 className="font-weight-bold mt-4 mb-3">{props.name}</h5>
      <p className="text-uppercase blue-text">{props.post}</p>
    </MDBCol>
  );
}
