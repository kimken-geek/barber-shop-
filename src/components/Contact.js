import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ArrowRight, GeoAltFill } from 'react-bootstrap-icons';

function Contact() {
  return (
    <Container id='contact'>
        <Row><h2 className='text-white text-center underline-small my-5'>Contact Us</h2></Row>
        <Row>
            <Col md={6}>
            <img
            className="fluid rounded"
            src="https://cdn.pixabay.com/photo/2016/07/17/18/23/contact-us-1524408_960_720.png"
            alt="Contact Us"
            /></Col>
            <Col>
                <Form className='text-white'>
                    <h1>Send us a message.</h1>
                    <Form.Group as={Col} controlId='formGridName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='password' placeholder='Enter Your Name' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGridEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGridMessage'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' rows='3' />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='my-3'>
                        Submit
                    </Button>
                    
                </Form>
                <Col><GeoAltFill color="white" size={80} className='my-5'/></Col>
                <Col className='text-white'>ABC Place, 002909</Col>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact