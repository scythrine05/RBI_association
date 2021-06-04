import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";

export default function footer() {
  return (
    <div className="footer">
      <h6 className="footer_text">
        © 2021 <font color="#3498db"> RBIOA India </font>, All Rights Reserved{" "}
        <font size="1">
          <br />
          <br /> ·
          <Link exact to="/developers">
            <h8 style={{ marginRight: "5px", marginLeft: "5px" }}>
              {" "}
              Developers{" "}
            </h8>
          </Link>
          ·
        </font>
      </h6>
    </div>
  );
}
