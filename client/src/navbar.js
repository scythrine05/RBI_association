import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Log from "./log";
import "./css/navbar.css";

import { NavLink } from 'react-router-dom';

export default function navbar() {
  return (
    <nav>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="icon.png"
            width="75"
            height="50"
            className="icon d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Log />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" exact activeStyle={ {color : 'yellow'} }> Home </NavLink>
            <NavLink to="/News" exact activeStyle={ {color : 'yellow'} }> News </NavLink>
            <NavLink to="/Polls" exact activeStyle={ {color : 'yellow'} }> Polls </NavLink>
            <NavLink to="/Profile" exact activeStyle={ {color : 'yellow'} }> Profile </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
