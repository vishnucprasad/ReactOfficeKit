import React from "react";
import "./topnavbar.css";
import logo from "../../assets/images/officekithr-logo.svg";
import {
  Navbar,
  Container,
  Nav,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

const Topnavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="navLink">
                <img
                  className="me-1"
                  src="https://www.officekithr.com/images/mail.svg"
                  alt=""
                />
                sales@officekithr.com
              </Nav.Link>
              <Nav.Link href="#link" className="navLink">
                <img
                  className=""
                  src="https://www.officekithr.com/images/whatsapp.svg"
                  alt=""
                />
                +917909214216
              </Nav.Link>
              <Nav.Link href="#link" className="navLink">
                <i class="fa-solid fa-phone me-1"></i>
                +917909214216
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topnavbar;
