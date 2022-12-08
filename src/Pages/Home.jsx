import React from 'react'
import Banner from '../components/Banner/Banner'
import Banner2 from '../components/Banner2/Banner2'
import Navbars from '../components/Navbar/Navbars'
import Services from '../components/Services/Services'

function Home() {
  return (
    <>
        {/* <Navbars/> */}
        <Banner/>
        <Services/>
        <Banner2/>
    </>
  )
}

export default Home