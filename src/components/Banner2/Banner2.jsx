import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import {AiTwotoneLike} from 'react-icons/ai'
import './Banner2.css'

function Banner2() {
  return (
   <Container fluid className='banner2'>
    <Container fluid className='banner2-second'>
    <Row>
        <Col>
        <h2 className='banner2-text'>We're curating experience that <br/> <span style={{color:"yellow"}} >enable everyone to travel world</span></h2>
        </Col>
        <Col>
        <Row>
        <Col className='banner2-card'>
            <img src='like.png' className='banner2-png'/>
            <h3>5,56,658</h3>
            <h6>Happy Guests</h6>
        </Col>
        <Col className='banner2-card'>
        <img src='delivery.png' className='banner2-png'/>
            <h3>42,907</h3>
            <h6>Our Tours</h6>
        </Col>
        <Col className='banner2-card'>
        <img src='airplane.png' className='banner2-png'/>
            <h3>2500+</h3>
            <h6>Our destinations</h6>
        </Col>
        </Row>
        </Col>
    </Row>
    </Container>
   </Container>
  )
}

export default Banner2