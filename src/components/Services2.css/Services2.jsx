import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import './Services2.css'

export default function Services2 (){
  
    const settings = {
        dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rows: 2,
      slidesPerRow: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            slidesPerRow: 3,
            infinite: true,
            dots: true,
            rows: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            slidesPerRow: 3,
            initialSlide: 2,
            rows: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            rows: 1
          }
        }
      ]
    };
    return (
      <Container fluid='md' className="service2Container">
        <h2>All inclusive tours, Bags bharo Cabs Karo!</h2>
        <Slider {...settings}>
          <div className="serviceCarousal">
            <img src="homeless.png" alt=""/>
            <h5>Accommodation</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className="serviceCarousal">
            <img src="flags.png" alt=""/>
            <h5>Tour Managers</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className="serviceCarousal">
            <img src="research.png" alt=""/>
            <h5>Best Value Itinerary</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className="serviceCarousal">
            <img src="fried-rice.png" alt=""/>
            <h5>All Meals</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className="serviceCarousal">
            <img src="touring.png" alt=""/>
            <h5>On-Tour Transport</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
          <div className="serviceCarousal">
            <img src="fly.png" alt=""/>
            <h5>To and from airfare</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </Slider>
      </Container>
    );
  }
