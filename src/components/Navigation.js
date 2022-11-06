import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Clogo.png'

function Navigation() {
  return (
    <>
    <Navbar expand="lg" className='navbar'>
      <Container fluid>
      <Navbar.Brand className='ms-auto ' href="#">
            <img
                src={logo}
                width="380px"
                height="100px"
                className="d-inline-block align-top"
                alt="company logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-light m-3'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 navlinks"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='Nav-item' href="#">HOME</Nav.Link>
            <Nav.Link className='Nav-item' href="#aboutus">ABOUT US</Nav.Link>
            <Nav.Link className='Nav-item'href="#services">SERVICES</Nav.Link>
            <Nav.Link className='Nav-item'href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="light">Book Consultation</Button>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Navigation;