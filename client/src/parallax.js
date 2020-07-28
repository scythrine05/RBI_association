import React from "react";
import { Parallax } from "react-parallax";
import "./css/parallax.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const image = "https://wallpapercave.com/wp/wp3400418.jpg";

parallax.defaultProps = {
  height: 400,
};
export default function parallax(props) {
  return (
    <div style={styles}>
      <Parallax
        bgImage={image}
        strength={100}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgb(255,215,0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 1150,
                height: percentage * 1150,
              }}
              className="circle"
            />
          </div>
        )}
      >
        <div style={{ height: props.height }}>
          <div className="title">{props.name}</div>
        </div>
      </Parallax>
    </div>
  );
}
