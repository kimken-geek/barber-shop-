import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function About() {
  return (
    <Container className='min-vh-100 my-5 border' id='aboutus'>
      <Row>
        <Col md={7}>
            <img
            className="fluid rounded about-img"
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="About Us"
            />
        </Col>
        <Col md={5}>
            <h2 className='text-white text-center underline-small'>About Us</h2>
            
            <p className='text-white my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum nisl ac ante placerat varius. 
            Fusce id malesuada tellus. Aenean.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
        <h2 className='text-white text-center underline-small my-3'>Ours is a Different Experience!</h2>
        <p className='text-white my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        </Col>
        <Col md={6}>
            <img
            className="fluid rounded about-img"
            src="https://images.unsplash.com/photo-1634481427034-0e9e6173334a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
            alt="About Us"
            />
        </Col>
      </Row>
    </Container>
  )
}

export default About