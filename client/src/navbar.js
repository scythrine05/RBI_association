import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Log from "./log";
import "./css/navbar.css";

import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <nav>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img
              src="/icon.png"
              width="70"
              height="65"
              className="icon d-inline-block align-top"
              alt="RBIOA logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Log />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              className="nav-link"
              exact
              to="/"
              activeStyle={{ color: "#3498db" }}
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to="/news"
              activeStyle={{ color: "#3498db" }}
            >
              {" "}
              News{" "}
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to="/communication"
              activeStyle={{ color: "#3498db" }}
            >
              {" "}
              Communication{" "}
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to="/polls"
              activeStyle={{ color: "#3498db" }}
            >
              {" "}
              Polls{" "}
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to="/profile"
              activeStyle={{ color: "#3498db" }}
            >
              {" "}
              Profile{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
