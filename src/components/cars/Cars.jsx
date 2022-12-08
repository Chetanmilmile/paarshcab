import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cars.css";

function Cars() {
  return (
    <Container fluid className="carsContainer">
      <Container className="carsrow1">
        <Col md={3} className="outercarDiv">
          <div className="carDiv">
            <img src="suv.png" alt="" />
          </div>
          <h5>SUV</h5>
        </Col>

        <Col md={3} className="outercarDiv">
          <div className="carDiv">
            <img src="sedan.png" alt="" />
          </div>
          <h5>Sedan</h5>
        </Col>

        <Col md={3} className="outercarDiv">
          <div className="carDiv">
            <img src="hatchback.png" alt="" />
          </div>
          <h5>HatchBack</h5>
        </Col>

        <Col md={3} className="outercarDiv">
          <div className="carDiv">
            <img src="taxi.png" alt="" />
          </div>
          <h5>Cabs</h5>
        </Col>
      </Container>

      <Row className="carsrow2">
        <Col md={6}>
            <img className="maincarimg" src="innova2-removebg-preview.png" alt=""/>
        </Col>

        <Col md={6} className='innerCar2'>
          <Col md={3} className='leftCarData'>
            <li>Passengers :7</li>
            <li>Air Condition :Yes</li>
            <li>Luggage Carry :4</li>

          </Col>

          <Col md={3} className='rightCarData'>
            <h2>SUV</h2>
            <p>
              Book SUV Through Mansi Cab Assuresa Comfortable, Safe, Quick and
              trouble Free Journey To Destination
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Cars;
