import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { approve, disapprove } from "./axios/pendingMember";
import Loading from "react-fullscreen-loading";
import { Button, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";

export default function PendingMembers(props) {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(0);

  const approved = async () => {
    setLoading(true);
    try {
      await approve(props.Id);
    } catch (e) {
      console.log(e);
    }
     Swal.fire("<h4>Approved</h4>","", "success").then(() => {
          setRedirect(1);
        });
    setLoading(false);
  };
  const disapproved = async () => {
    setLoading(true);
    try {
      await disapprove(props.Id);
    } catch (e) {
      console.log(e);
    }
     Swal.fire("<h4>Removed</h4>", "", "success").then(() => {
          setRedirect(1);
        });
    setLoading(false);
  };

    const Rd = () => {
    if (redirect === 1) return <Redirect to="/profile" />;
    return null;
  };

  return (
    <React.Fragment>
    <Loading
        loading={loading}
        background="rgba(0,0,0,0.8)"
        loaderColor="#3498db"
      />
    <Rd/>
      <tr>
        <td>{props.Id}</td>
        <td>{props.Name}</td>
        <td>{props.Email}</td>
        <td>
          <Button
            style={{ background: "green" }}
            variant="success"
            onClick={approved}
          >
            {loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            {!loading && <span>Approve</span>}
          </Button>
          <Button
            style={{ background: "red" }}
            variant="danger"
            onClick={disapproved}
          >
            {loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            {!loading && <span>Disapprove</span>}
          </Button>
        </td>
      </tr>
    </React.Fragment>
  );
}
