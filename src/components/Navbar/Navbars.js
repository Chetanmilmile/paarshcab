import React from 'react'
import { Container } from 'react-bootstrap'
import { FaUserCircle }  from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

function Navbars() {
  return (

    <Container>
        <div className='navbar'>
            <div className='left-nav'>
                <img src='paarsh-p4x.png' style={{width:"4rem"}}/>
            </div>
            <div className='right-nav'>

                <FaUserCircle style={{fontSize:"2rem" , color:'red',margin:'0.5rem'}}/>
                <IoLogoGooglePlaystore style={{fontSize:"2rem" , color:'red' , margin:'0.5rem'}}/>
            </div>
        </div>
    </Container>
  )
}

export default Navbars