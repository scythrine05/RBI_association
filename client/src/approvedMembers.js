import React from "react";
import { Button } from "react-bootstrap";

export default function approvedMembers(props) {
  return (
    <tr>
      <td>{props.Id}</td>
      <td>{props.Name}</td>
      <td>{props.Email}</td>
      <td>
        <Button style={{ background: "red" }} variant="danger">
          Remove
        </Button>{" "}
      </td>
    </tr>
  );
}
