import React from "react";

import "./css/jumbotron.css";

parallax.defaultProps = {
  height: 400,
};
export default function parallax(props) {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${props.background})`,
      }}
    >
      <h1 className="page-heading">
        <span className="page-heading-primary">{props.name}</span>
        <span className="page-heading-secondary">{props.subname}</span>
      </h1>
    </div>
  );
}
