import React, {useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import {CgArrowsExchangeAlt} from 'react-icons/cg'
import {FaCalendarAlt} from 'react-icons/fa'
import {ImStopwatch} from 'react-icons/im'
import './Banner.css'


function Banner() {

  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <Container fluid className='banner'>
     <div className='card'>
        <div>
      <div className='banner-radio'>
        <div>
        <input
          type="radio"
          id="oneway"
          name="choose"
          value="oneway"
          checked={selected === 'oneway'}
          onChange={handleChange}
        />
        <label htmlFor="yes">One Way Trip</label>
        </div>

        <div>
        <input
          type="radio"
          id="roundtrip"
          name="choose"
          value="roundtrip"
          checked={selected === 'roundtrip'}
          onChange={handleChange}
        />
        <label htmlFor="yes">Round Trip</label>
        </div>

        <div>
        <input
          type="radio"
          id="rental"
          name="choose"
          value="rental"
          checked={selected === 'rental'}
          onChange={handleChange}
        />
        <label htmlFor="rental">Rental</label>
        </div>

        <div className='banner-radio'>
        <input
          type="radio"
          id="airport"
          name="choose"
          value="airport"
          checked={selected === 'airport'}
          onChange={handleChange}
        />
        <label htmlFor="airport">Airport</label>
      

        
      </div>
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
                      <input type='date' className='banner-btn-cal' name="DATE" placeholder="dd-mm-yyyy"/>
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