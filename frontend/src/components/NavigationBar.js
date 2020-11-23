import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Link className='navigation-brand' href="/">Amra Musić</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link className='navigation-link' to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='navigation-link' to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className='navigation-link' to="/contact">Contact</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar
