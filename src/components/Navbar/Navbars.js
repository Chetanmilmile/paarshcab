import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import "./Navbars.css";

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="sm"  variant="dark" >
      <Container fluid>
            <img src="logo png.png" style={{ width: "10rem" }} />
            <Navbar.Brand href="#home" className="nav-title">mansi cab</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
          
                  </Nav>
                  <Nav>
                    <Nav.Link href="#"> <Button  className="login-btn">Login</Button> </Nav.Link>
                      <Nav.Link href="#" style={{color:"black" ,fontSize:"0.9rem"}} ><IoBagRemoveOutline className="agent" /> <br/> Travel Agent  </Nav.Link>
                      <Nav.Link href="#" style={{color:"black", fontSize:"0.9rem"}}><img className="playstore" src="https://img.icons8.com/color/512/google-play.png"/> <br/> Download App
                    </Nav.Link>

                    <Nav.Link href="#"> 
                      <div className="dropdown">
                       <BiUser className="login"/>
                         <div className="dropdown-content">
                          <a href="#">Profile</a>
                          <a href="#">Setting</a>
                          <a href="#">Booked Cabs</a>
                         </div>
                     </div>
                    </Nav.Link>
                  <Nav.Link href="#"> 
                    <div className="dropdown">
                     <h1 className="lang">Lang<i class="arrow down"></i></h1>
                     <div className="dropdown-content">
                      <a href="#">English</a>
                      <a href="#">Hindi</a>
                     </div>
                    </div>
                  </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
