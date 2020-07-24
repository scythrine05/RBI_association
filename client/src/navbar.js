import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Log from "./log";
import "./navbar.css";

export default function navbar() {
  return (
    <nav>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="icon.png"
            width="30"
            height="30"
            className="icon d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Log />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">News</Nav.Link>
            <Nav.Link href="#features">Polls</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
