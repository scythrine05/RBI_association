import React from "react";

export default function footer() {
  return (
    <h7
      style={{
        fontWeight: "600",
        margin: "20px 0px",
        color: "white",
        textShadow: "1px 1px black",
      }}
    >
      <img
        src="icon.png"
        width="75"
        height="75"
        className="icon d-inline-block align-top"
        alt="React Bootstrap logo"
      />{" "}
      site design / logo © 2020 RBI Assosiation Inc ; Developed by Hardik and
      Rohan
      <br />
    </h7>
  );
}
