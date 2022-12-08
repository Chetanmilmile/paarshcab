import { Col, Container, Row } from 'react-bootstrap';

import './Services.css'

function Services() {
  return (


    <Container fluid className='services'>

        <h1 className='split-head' >WHAT FORMS MANSI SPLIT ?</h1>
         
            <div className='split-container'>
         
            <div className='split-inner'>
          <div className='split-img'>
          <div className='split-png-div1'>
            <img className='split-png1'src='car-wash.png'/>
            </div>
            <h6 className='split-text1'>Clean And <br/> Hygienic Car</h6>

            <div className='split-png-div2'>
            <img className='split-png2'src='bill.png'/>
            </div>
            <h6 className='split-text2'>Transparent<br/> Billing</h6>

            <div className='split-png-div3'>
            <img className='split-png3'src='chauffeur.png'/>
            </div>
            <h6 className='split-text3'>Expert<br/> Chauffeurs</h6>
            

            <div className='split-png-div4'>
            <img className='split-png4'src='india.png'/>
            </div>
            <h6 className='split-text4'>2000+<br/> Cities</h6>

            <div className='split-ul1'></div>
            <div className='split-ul2'></div>
            <div className='split-ul3'></div>
            <div className='split-ul4'></div>
            <div className='split-ul5'></div>
            <div className='split-ul6'></div>

          
          </div>
        </div>
        </div>

        <h2 className='our-services'>OUR SERVICES</h2>
        
        <Row className='service-container'>
            <Col className='service-card'>
            <div className='service-img-div'>
            <div className='service-img1'>
              <img src='car-back.png' className='back-car'/>
            <img src='sportcar.png' className='service-png1'/>
            </div>
            <p className='service-title'>ROUNDTRIP CABS</p>
            <p className='service-texts'>
            Our premium roundtrip services 
             will pamper you with an absolutely 
             doorstep & back. Our chauffeurs 
             are not only courteous but are also 
             expert travel companions that will 
             make your road travel memorable. 
             Affordable Luxury, as we d like to 
             call it      </p>

             <div className='service-icon1'>

      <div className="list-group-flush">
    <p className='service-text'><img src='chauffeur.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='shield.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='bus-stop.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
    </div>
    </div>
            </Col>
            <Col className='service-card'>
            <div className='service-img-div'>
            <div className='service-img2'>
            <img src='road.png' className='service-png'/>
            </div>
            <h1 className='service-title'>ONEWAY DROPS</h1>
            <p className='service-texts'>
           Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
      </p>
      <div className='service-icon2'>

      <div className="list-group-flush">
    <p className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
    </div>
    </div>
            </Col>
            <Col className='service-card'>
            <div className='service-img-div'>
            <div className='service-img3'>
            <img src='road1.png' className='service-png'/>
            </div> 
            <h1 className='service-title'>LOCAL RENTALS</h1>
            <p className='service-texts'>
            Book our flexible hourly rental cabs 
and get chauffeured within the city 
for your business meetings or 
shopping chores. Our local rentals 
are available for 4 hours, 8 hours 
or 12 hours, based on your needs. 
Explore your city like a local.      </p>

<div className='service-icon3'>
      <div className="list-group-flush">
    <p className='service-text'><img src='booking.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='clock.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='bus-stop.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
    </div>
    </div>
            </Col>
            <Col className='service-card'>
              <div className='service-img-div'>
              <div className='service-img4'>
            <img src='journey.png' className='service-png'/>
            </div>            
            <h2 className='service-title'>AIRPORT</h2>
            <p className='service-texts'>
            We care about your flight as much 
as you do. Our airport transfer 
services across airports in the 
country offer pickups and drops 
with complete reliability. Book in 
advance and rest easy we will take 
care of the rest      </p>

<div className='service-icon4'>
      <div className="list-group-flush">
        
    <p className='service-text'><img src='ratings.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='car-insurance.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
    </div>
    </div>
            </Col>

        </Row>

    </Container>
   
  );
}

export default Services;