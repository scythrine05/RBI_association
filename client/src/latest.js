import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "./communicationCards";
import Fade from "react-reveal/Fade";
import "./css/latest.css";

export default class MultipleItems extends Component {
  render() {
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
      <Fade bottom>
        <div>
          <h1 style={{ marginTop: "41px", textAlign: "center" }}>
            {" "}
            What's New{" "}
          </h1>

          <Slider {...settings}>
            <Cards heading="1" paragraph="hey" date="2000" />
            <Cards heading="2" paragraph="hey" date="2003" />
            <Cards heading="3" paragraph="hey" date="2004" />
          </Slider>
        </div>
      </Fade>
    );
  }
}
