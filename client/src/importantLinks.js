import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/importantLinks.css";
import { Container } from "react-bootstrap";

import "./css/importantLinks.css";

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      className: "impLinks",
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 6,
      adjustHeight: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            vertical: true,
            verticalScroll: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Container>
          <h1 className="iL-h1" style={{ textAlign: "center" }}>
            Important Links
          </h1>
          <Slider {...settings}>
            <img
              src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/08/passport-app-india-screens.jpg"
              width="100"
              height="100"
              alt="RBIOA logo"
              className="img_slide d-inline-block align-top"
            />
            <img
              src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/08/passport-app-india-screens.jpg"
              width="100"
              height="100"
              alt="RBIOA logo"
              className="img_slide d-inline-block align-top"
            />
            <img
              src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/08/Narendra-Modi-App-SS-1.jpg"
              width="100"
              height="100"
              className="img_slide d-inline-block align-top"
              alt="RBIOA logo"
            />
            <img
              src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/08/yourstory_AppFriday_IncredibleIndia_InsideArticle1.jpg"
              width="100"
              height="100"
              className="img_slide d-inline-block align-top"
              alt="RBIOA logo"
            />
            <img
              src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/08/Grameen_Vidhutikaran.png"
              width="100"
              height="100"
              className="img_slide d-inline-block align-top"
              alt="RBIOA logo"
            />
            <img
              src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/09/khoyapaya1.jpg"
              width="100"
              height="100"
              className="img_slide d-inline-block align-top"
              alt="RBIOA logo"
            />
            <img
              src="https://thebetterindia-english.s3.ap-south-1.amazonaws.com/uploads/2016/09/digital-india-m-kavach-gallery-1.jpg"
              width="100"
              height="100"
              className="img_slide d-inline-block align-top"
              alt="RBIOA logo"
            />
          </Slider>
        </Container>
      </div>
    );
  }
}
