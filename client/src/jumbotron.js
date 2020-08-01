import React from "react";

import "./css/jumbotron.css";

parallax.defaultProps = {
  height: 400,
};
export default function parallax(props) {
  return (
    <div
      class="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${props.background})`,
      }}
    >
      <h1 class="page-heading">
        <span class="page-heading-primary">{props.name}</span>
        <span class="page-heading-secondary">{props.subname}</span>
      </h1>
    </div>
  );
}
