import React from 'react'
import Banner from '../components/Banner/Banner'
import Banner2 from '../components/Banner2/Banner2'
import Services from '../components/Services/Services'
import Services2 from '../components/Services2.css/Services2'
import Testimonial from '../components/Testimonial/Testimonial'
import Why from '../components/why/Why'
import Footer from '../components/Footer/Footer'
import Cars from '../components/cars/Cars'
import Places from '../components/places/Places'
import Navbars from '../components/Navbar/Navbars'


function Home() {
  return (
    <>
        <Navbars />
        <Banner/>
        <Services/>
        <Banner2/>
        <Cars />
        <Services2 />
        <Testimonial />
        <Why />
        <Places />
        <Footer />
    </>
  )
}

export default Home