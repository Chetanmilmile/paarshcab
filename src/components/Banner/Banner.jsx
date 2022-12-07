import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {CgArrowsExchangeAlt} from 'react-icons/cg'
import {FaCalendarAlt} from 'react-icons/fa'
import {ImStopwatch} from 'react-icons/im'
import './Banner.css'

function Banner() {
  return (
    <Container fluid className='banner'>
     <div className='card'>
        <div>
            <div className='banner-radio'>
              <label><input type="radio" /> One way Trip</label>
              <label><input type="radio" /> Round Trrip</label>
              <label><input type="radio" /> Rental</label>
              <label><input type="radio" /> Airport</label>
            </div>

            <Row className='banner-main'>
              <Col>
              <Row>
              <Col className='banner-sub'>
                <h6>FROM</h6>
                <input type="text" className='banner-input' />
              </Col>
              <Col><CgArrowsExchangeAlt className='banner-icon'/></Col>
              <Col className='banner-sub'>
                <h6>TO</h6>
                <input type="text" className='banner-input' />
              </Col>
              </Row>
              </Col>
              
              <Col>
                <Row>
                  <Col className='banner-sub'>
                      <h6>DATE</h6>
                      <button className='banner-btn-cal'>26/11/2022<FaCalendarAlt/></button>
                  </Col>

                  <Col className='banner-sub'>
                      <h6>Time</h6>
                      <button className='banner-input'>03:00 AM <ImStopwatch/></button>
                  </Col>

                  <Col className='banner-sub'>
                      <h6>RETURN</h6>
                      <button className='banner-input'> Tab to add a return date  </button>
                  </Col>

                </Row>
              
              </Col>
            </Row>

            <button className='banner-btn-sub'>SEARCH CABS</button>
        </div>
     </div>

    </Container>
  )
}

export default Banner