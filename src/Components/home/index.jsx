import React from 'react'
import Header from './Header/Header'
import FifthPage from './LandingPage/FifthPage'
import FourthPage from './LandingPage/FourthPage'
import LandingPage from './LandingPage/LandingPage'
import Pools from './LandingPage/Pools'
import SeventhPage from './LandingPage/SeventhPage'
import SixthPage from './LandingPage/SixthPage'
import ThirdPage from './LandingPage/ThirdPage'

function index() {
  return (
    <div>
        <Header />
        <LandingPage/>
        {/* <Pools/> */}
        <ThirdPage/>
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <SeventhPage />
    </div>
  )
}

export default index