import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">San Simon Navbar</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header
