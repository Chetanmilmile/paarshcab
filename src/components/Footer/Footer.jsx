import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footerContainer">
      <Row>
        <Col md={3} className='footerCol1'>
          <Col>
            <img className="footer1img" src="last.png" alt="" />
          </Col>

          <Col className="main-page">
            <h4>Main Pages</h4>
            <a href="/home">Home</a>
            <a href="/contactus">Contact Us</a>
            <a href="/faq">FAQS</a>
          </Col>
        </Col>

        <Col md={3}>
          <Col className="useful-links">
            <h4>Useful Links</h4>
            <div>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/contactus">Contact Us</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/travelnews">Travel News</a>
              </li>
              <li>
                <a href="/triptalkies">Trip talkies</a>
              </li>
              <li>
                <a href="/tnc">Terms & Condition</a>
              </li>
              <li>
                <a href="/privacypolicy">Privacy Policy</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/sitemap">Site Map</a>
              </li>
            </div>
          </Col>
        </Col>

        <Col md={3}>
          <Col className="service-hrs">
            <h4>Service Hours</h4>
            <div className="innerService">
              <div className="leftService">
                <p>Monday :</p>
                <p>Tuesday :</p>
                <p>Wednesday :</p>
                <p>Thursday :</p>
                <p>Friday :</p>
                <p>Saturday :</p>
                <p>sunday :</p>
              </div>
              <div className="rightService">
                <p>24 hrs</p>
                <p>24 hrs</p>
                <p>24 hrs</p>
                <p>24 hrs</p>
                <p>24 hrs</p>
                <p>24 hrs</p>
                <p>24 hrs</p>
              </div>
            </div>
          </Col>
        </Col>

        <Col md={3}>
          <img className="footer2img" src="footer2.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
