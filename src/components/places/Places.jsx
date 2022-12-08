import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Places.css";

function Places() {
  return (
    <Container fluid className="placesContainer">
      <Container></Container>

      <Container>
        <Row>
          <Col className='placesCol'>
            <h5>CABS FROM NASHIK</h5>
            <li>Nashik to Matheran Cabs</li>
            <li>Nashik to Dhule Cabs</li>
            <li>Nashik to Manmad Cabs</li>
            <li>Nashik to Trimbakeshwar Cabs</li>
            <li>Nashik to Kalyan</li>
          </Col>
          
          <Col className='placesCol'>
            <h5>CABS FROM LONAVALA</h5>
            <li>Lonavala to HyderaÐad Cabs</li>
            <li>Lonavala to Lavasa Cabs</li>
            <li>Lonavala to Khopoli Cabs</li>
            <li>Lonavala to MahaÐaleshwar Cabs</li>
          </Col>
          
          <Col className='placesCol'>
            <h5>CABS FROM SHIRDI</h5>
            <li> Surat to Daman Cabs</li>
            <li> Surat to Badlapur Cabs</li>
            <li> Surat to Kodinar Cabs</li>
            <li> Surat to Vansda Cabs</li>
          </Col>
          
          <Col className='placesCol'>
            <h5>CABS FROM SURAT</h5>
            <li> Surat to Daman Cabs</li>
            <li> Surat to Badlapur Cabs</li>
            <li> Surat to Kodinar Cabs</li>
            <li> Surat to Vansda Cabs</li>
          </Col>
          
        </Row>
      </Container>

      <Container>
        <h5>POPULAR AIRPORTS CABS</h5>
        <Row>
            
          <Col className='placesCol'>
            <li>Mumbai Airport Taxi</li>
            <li>Ahemdabad Airport Taxi</li>
            <li>Amritsar Airport Taxi</li>
            <li>Bangalore Airport Taxi</li>
          </Col>

          <Col className='placesCol'>
            <li>Kolkata Airport Taxi</li>
            <li>Cochin Airport Taxi</li>
            <li>Delhi Airport Taxi</li>
            <li>Hyderabad Airport Taxi</li>
          </Col>

          <Col className='placesCol'>
            <li>Chandigarh Airport Taxi</li>
            <li>Chennai Airport Taxi</li>
            <li>Jaipur Airport Taxi</li>
            <li>Varanasi Airport Taxi</li>
          </Col>

          <Col className='placesCol'>
            <li>Udaipur Airport Taxi</li>
            <li>Vishakhapatnam Airport Taxi</li>
            <li>Pune Airport Taxi</li>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Places;
