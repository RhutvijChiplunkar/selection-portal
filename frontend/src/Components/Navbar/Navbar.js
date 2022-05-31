import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-all">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="nb py-0"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/home">Home</NavLink>
              <NavLink exact to="/joblist">Jobs</NavLink>
              <NavLink exact to="/contactus">Contact Us</NavLink>
            </Nav>
            <Nav className="right-logout">
              <NavLink exact to='/'>Logout</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
