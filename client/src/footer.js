import React from "react";
import { Link } from "react-router-dom";

import "./css/footer.css";

export default function footer() {
  return (
    <div className="footer">
      <h6 className="footer_text">
        <div>
          © 2021 <font color="#3498db"> RBIOA India </font>, All Rights Reserved
        </div>
        <br />
        <a
          className="location"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/Reserve+Bank+of+India/@18.932777,72.8369771,15z/data=!4m12!1m6!3m5!1s0x0:0xd0dec989eec8459e!2sReserve+Bank+of+India!8m2!3d18.932777!4d72.8369771!3m4!1s0x0:0xd0dec989eec8459e!8m2!3d18.932777!4d72.8369771"
        >
          <h8>
            Reserve Bank of India, 3rd Floor, Main Building, Mumbai - 400 001
          </h8>
        </a>
        <font size="1">
          <br />
          <br />
          <br />
          <Link exact to="/developers">
            <h8 style={{ marginRight: "5px", marginLeft: "5px" }}>
              · Developers ·
            </h8>
          </Link>
        </font>
      </h6>
    </div>
  );
}
