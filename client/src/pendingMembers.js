import React, { useState } from "react";
import { approve, disapprove } from "./axios/pendingMember";
import { Button, Spinner } from "react-bootstrap";

export default function PendingMembers(props) {
  const [loading, setLoading] = useState(false);
  const approved = async () => {
    setLoading(true);
    try {
      await approve(props.Id);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const disapproved = async () => {
    setLoading(true);
    try {
      await disapprove(props.Id);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <React.Fragment>
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
          </Button>{" "}
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
          </Button>{" "}
        </td>
      </tr>
    </React.Fragment>
  );
}
