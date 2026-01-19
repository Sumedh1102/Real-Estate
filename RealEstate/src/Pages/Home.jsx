import React from 'react'
import Parallex from '../Components/Parallex'
import PropertyComponent from '../SubComponents/PropertyComponent'
import Grid from '../Components/Grid'
import Uniqueness from '../Components/Uniqueness'
import Ouragency from '../Components/Ouragency'
import Timeline from '../Components/Timeline'
import Slider from '../Components/Slider'
import Blogs from '../Components/Blogs'
import Faq from '../Components/Faq'
import Services from '../Components/Services'

const Home = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div id="home">
          <Parallex />
        </div>
        <div id="properties">
          <PropertyComponent limit={4} />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="why-us">
          <Uniqueness />
        </div>
        <div id="about">
          <Ouragency />
        </div>
        <div id="process">
          <Timeline />
        </div>
        <div id="reviews">
          <Slider />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="faq">
          <Faq />
        </div>
      </div>
    </>
  )
}

export default Home
