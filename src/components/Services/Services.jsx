import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Services.css'

function Services() {
  return (


    // <Container fluid className='Service-container'>

    //         <h1 className='our-services'>OUR SERVICES</h1>

    // <Row >
    // <Card className='service-card'>
    //   <img variant="top" src="round.jpg" className='service-img' />
    //   <Card.Body>
    //     <Card.Title className='service-title'>ONEWAY DROPS</Card.Title>
    //     <Card.Text className='service-texts'>
    //       Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</ListGroup.Item>
    //   </ListGroup>
    // </Card>
    // <Card  className='service-card'>
    //   <Card.Img variant="" src="round.jpg" className='service-img' />
    //   <img src='road.png' className='service-png'/>
    //   <Card.Body>
    //     <Card.Title>ONEWAY DROPS</Card.Title>
    //     <Card.Text>
    //       Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</ListGroup.Item>
    //   </ListGroup>
      
    // </Card>
    // <Card  className='service-card'>
    //   <Card.Img variant="top" src="round.jpg" className='service-img' />
    //   <Card.Body>
    //     <Card.Title>ONEWAY DROPS</Card.Title>
    //     <Card.Text>
    //       Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</ListGroup.Item>
    //   </ListGroup>
      
    // </Card>
    // <Card  className='service-card'>
    //   <Card.Img variant="top" src="round.jpg" className='service-img' />
    //   <Card.Body>
    //     <Card.Title>ONEWAY DROPS</Card.Title>
    //     <Card.Text>
    //       Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</ListGroup.Item>
    //     <ListGroup.Item className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</ListGroup.Item>
    //   </ListGroup>
      
    // </Card>
    // </Row>
    // </Container>

    <Container fluid className='services'>

        <h1>WHAT FORMS MANSI SPLIT ?</h1>

        <Row className='split-main'>
            <Col className='split-col'>
            <img className='split-png'src='car-wash.png'/>
            <h6 className='split-text'>Clean And <br/> Hygienic Car</h6>
            </Col>
            <Col className='split-col'>
            <img className='split-png'src='bill.png'/>
            <h6 className='split-text'>Transparent<br/> Billing</h6>
            </Col>
            <Col className='split-col'>
            <img className='split-png'src='chauffeur.png'/>
            <h6 className='split-text'>Expert<br/> Chauffeurs</h6>
            </Col>
            <Col className='split-col'>
            <img className='split-png'src='india.png'/>
            <h6 className='split-text'>2000+<br/> Cities</h6>
            </Col>
        </Row>

        <h2 className='our-services'>OUR SERVICES</h2>
        
        <Row className='service-container'>
            <Col className='service-card'>
            <img variant="top" src="round.jpg" className='service-img' />
            {/* <img src='road.png' className='service-png'/> */}
            <h2 className='service-title'>ONEWAY DROPS</h2>
            <p className='service-texts'>
           Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
      </p>
      <div className="list-group-flush">
    <p className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
            </Col>
            <Col className='service-card'>
            <img variant="top" src="round.jpg" className='service-img' />
            <h2 className='service-title'>ONEWAY DROPS</h2>
            <p className='service-texts'>
           Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
      </p>
      <div className="list-group-flush">
    <p className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
            </Col>
            <Col className='service-card'>
            <img variant="top" src="round.jpg" className='service-img' />
            <h2 className='service-title'>ONEWAY DROPS</h2>
            <p className='service-texts'>
           Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
      </p>
      <div className="list-group-flush">
    <p className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
            </Col>
            <Col className='service-card'>
            <img variant="top" src="round.jpg" className='service-img' />
            <h2 className='service-title'>ONEWAY DROPS</h2>
            <p className='service-texts'>
           Our network of over 15 lakh one way routes ensures that there is no corner of the country tht you cant travel with us.Pay only one side charge at rock botoom rates. If you need to be somewhere, we'll get you there.
      </p>
      <div className="list-group-flush">
    <p className='service-text'><img src='hatchback.png' className='service-icons'/><br/>15 Lakh routes </p>
    <p className='service-text'><img src='hand.png' className='service-icons'/><br/>Lowest Fares</p>
    <p className='service-text'><img src='india.png' className='service-icons'/><br/>All Inclusive Atops</p>
    </div>
            </Col>

        </Row>

    </Container>
   
  );
}

export default Services;