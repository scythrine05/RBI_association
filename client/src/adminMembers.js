import React from "react";

export default function approvedMembers(props) {
  return (
    <tr>
      <td>{props.Id}</td>
      <td>{props.Name}</td>
      <td>{props.Email}</td>
    </tr>
  );
}
