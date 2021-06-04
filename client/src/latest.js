import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FCards } from "./commsTools";
import { Spinner } from "react-bootstrap";
import { getFComms } from "./axios/communication";
import "./css/latest.css";

export default function MultipleItems() {
  const [cData, setCData] = useState([]);

  const Comms = () => {
    if (!cData.length)
      return (
        <React.Fragment>
          <div style={{ textAlign: "center", marginBottom: "2%" }}>
            <Spinner animation="grow" />
          </div>
        </React.Fragment>
      );
    else {
      return (
        <Slider {...settings}>
          {cData.map((data, i) => {
            return (
              <FCards
                key={i}
                heading={data.Heading}
                paragraph={data.Body}
                date={data.Date.split("T")[0]}
              />
            );
          })}
        </Slider>
      );
    }
  };

  useEffect(() => {
    const CommsData = async () => {
      try {
        let data = await getFComms();
        return data;
      } catch (e) {
        throw e;
      }
    };
    CommsData().then((data) => {
      setCData(data);
    });
  }, []);

  const settings = {
    className: "latest_slider",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <div>
      <h1 style={{ marginTop: "41px", textAlign: "center" }}> What's New </h1>
      <Comms />
    </div>
  );
}
