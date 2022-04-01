import React from "react";
import "./topnavbar.css";
import logo from "../../assets/images/officekithr-logo.svg";
import {
  Navbar,
  Container,
  Nav,
  OverlayTrigger,
  Popover,
  Dropdown,
} from "react-bootstrap";
import What from "./indrop/What";

const Topnavbar = () => {
  const display = () => {
    return <What />;
  };

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
                <div className="ms-5">
                  {["bottom"].map((placement) => (
                    <OverlayTrigger
                      trigger="hover"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                          <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <a variant="secondary">WHAT </a>
                    </OverlayTrigger>
                  ))}
                </div>
              </Nav.Link>
              <Nav.Link href="#link" className="navLink">
                <div className="ms-5">
                  {["bottom"].map((placement) => (
                    <OverlayTrigger
                      trigger="click"
                      key={placement}
                      placement={placement}
                      overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                          <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                          <Popover.Body>
                            <strong>Holy guacamole!</strong> Check this info.
                          </Popover.Body>
                        </Popover>
                      }
                    >
                      <a variant="secondary">WHY </a>
                    </OverlayTrigger>
                  ))}
                </div>
              </Nav.Link>
              <Nav.Link href="#link" className="navLink">
                <div className="ms-5">
                  <h6 onMouseEnter={display}>why</h6>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topnavbar;
