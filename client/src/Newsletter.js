import React from "react";
import Navbar from "./navbar";

import Parallax from "./parallax";
import "./css/newsletter.css";
import { Container } from "react-bootstrap";
import Footer from "./footer";

export default function Newsletter() {
    return (
        <React.Fragment>
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>{" "}
            <div>
                <Parallax name={["Here's Your", <br />, "Newsletter"]} />
            </div>
            <footer
                className="gallery my-0"
                style={{
                    background: "url(https://wallpapercave.com/wp/wp3400418.jpg)",
                }}
            >
                <Footer />
            </footer>
        </React.Fragment>
    );
}
