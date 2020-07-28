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
              src="icon.png"
              width="75"
              height="75"
              className="icon d-inline-block align-top"
              alt="React Bootstrap logo"
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
              activeStyle={{ color: "gold" }}
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to="/news"
              activeStyle={{ color: "gold" }}
            >
              {" "}
              News{" "}
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to="/polls"
              activeStyle={{ color: "gold" }}
            >
              {" "}
              Polls{" "}
            </NavLink>
            <NavLink
              className="nav-link"
              exact
              to="/profile"
              activeStyle={{ color: "gold" }}
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
