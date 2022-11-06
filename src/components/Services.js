import React from 'react'
import {Container, Table, Row, Col, Button} from 'react-bootstrap'

function Services() {
  return (
   <Container className='min-vh-100 containner' id='services'>
       <Container className=''>
            <Row>
                <Col>
                <h2 className='text-white text-center underline-small my-5'>Our Services</h2>
                </Col>
            </Row>
        </Container>
        <Table className='container table-d text-white my-5 w-75'>
        <thead>
            <tr>
            <th>#</th>
            <th>Service</th>
            <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>NORMAL HAIRCUT</td>
            <td>$10</td>
            </tr>
            <tr>
            <td>2</td>
            <td>FADES</td>
            <td>$15</td>
            </tr>
            <tr>
            <td>3</td>
            <td>BEARD TRIMMING</td>
            <td>$8</td>
            </tr>
            <tr>
            <td>4</td>
            <td>HAIR RETOUCH AND DYE</td>
            <td>$20</td>
            </tr>
            <tr>
            <td>5</td>
            <td>WASHING</td>
            <td>$20</td>
            </tr>
            <tr>
            <td>6</td>
            <td>HAIR DREADS</td>
            <td>$20</td>
            </tr>
            <tr>
            <td>7</td>
            <td>FACIAL TREATMENT</td>
            <td>$20</td>
            </tr>
        </tbody>
        </Table>
        <Container className='w-25'>
            <Row>
                <Col>
                <p className='text-white'> Book an Appointment Today and Get a 25% discount on any service. We have offer 50% off for children, aged and veterans</p>
                <Button>Book an Appointment</Button>
                </Col>
            </Row>
        </Container>
   </Container>
  )
}

export default Services