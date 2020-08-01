import React from "react";
import { Button } from "react-bootstrap";

export default function approvedMembers() {
  return (
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>marksmail@gmail.com</td>
      <td>
        <Button style={{ background: "green" }} variant="success">
          Approve
        </Button>{" "}
        <Button style={{ background: "red" }} variant="danger">
          Disapprove
        </Button>{" "}
      </td>
    </tr>
  );
}
