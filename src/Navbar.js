import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import image from './Logo.png';
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img src={image} height={40} width={35} />
        <Navbar.Brand id={'autopus'} href="/">
          Autopus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Links</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
