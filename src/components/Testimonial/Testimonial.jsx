import './Testimonial.css'
import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Container } from 'react-bootstrap';

export default class Carousal2 extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <Container fluid className='containerCaraousal'>
        <h1>WHAT OUR CUSTOMERS SAYS</h1>
        <Slider {...settings}>
          <Col md={6}>
            <div className='carousal2card'>
                <p>You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone! </p>
            </div>
            <div className='students'>
                <p><span>Gunjan Gala</span><br/>Graphic Designer Intern</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='carousal2card'>
                <p>Internship with paarsh infotech have been good experience, and i am happy to intern in Paarsh Infotech. They make you grow with growing there company!</p> 
            </div>
            <div className='students'>
                <p><span>Sarika Kadam</span><br/>Python Intern</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='carousal2card'>
                <p>I have never worked a part-time job with such intensity and dedication before, My internship was a such valuable experience and i learn so much</p> 
            </div>
            <div className='students'>
                <p><span>Dharmi Bharot</span><br/>Frontend Intern</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='carousal2card'>
                <p>Enjoyable part of the job, great deal on this one I think this is one of the best company i have seen Best furniture and accessories, good place and good employees!</p> 
            </div>
            <div className='students'>
                <p><span>Gunjan Gala</span><br/>Python Intern</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='carousal2card'>
                <p>I am Business Development Executive here, and i am very happy with the enviorment, and grab the new ideas and concepts for businesses.! </p> 
            </div>
            <div className='students'>
                <p><span>Niraj Patil</span><br/>Frontend Intern</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='carousal2card'>
                <p>Enjoyable part of the job, great deal on this one I think this is one of the best company i have seen Best furniture and accessories, good place and good employees!</p> 
            </div>
            <div className='students'>
                <p><span>Gunjan Gala</span><br/>Python Intern</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='carousal2card'>
                <p>I am Business Development Executive here, and i am very happy with the enviorment, and grab the new ideas and concepts for businesses.! </p> 
            </div>
            <div className='students'>
                <p><span>Niraj Patil</span><br/>Frontend Intern</p>
            </div>
          </Col>
          <Col md={6}>
            <div className='carousal2card'>
                <p>Enjoyable part of the job, great deal on this one I think this is one of the best company i have seen Best furniture and accessories, good place and good employees!</p> 
            </div>
            <div className='students'>
                <p><span>Gunjan Gala</span><br/>Python Intern</p>
            </div>
          </Col>          

        </Slider>
      </Container>
    );
  }
}