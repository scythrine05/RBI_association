import React from "react";
import { Parallax } from "react-parallax";
import "./parallax.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const image =
  "https://c0.wallpaperflare.com/preview/440/715/681/dark-green-green-elaf-dark-background.jpg";
export default function parallax() {
  return (
    <div style={styles}>
      <Parallax
        bgImage={image}
        strength={200}
        renderLayer={(percentage) => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(50,205,50, ${percentage * 1})`,
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
        <div style={{ height: 700 }}>
          <div className="title">Something </div>
        </div>
      </Parallax>
    </div>
  );
}
