import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className='bg-light'>
        <Row>
            <Col><p className='text-center'>© 2022 kimken Creations. All rights reserved</p></Col>
        </Row>
    </Container>
  )
}

export default Footer