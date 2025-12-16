import React from 'react'
import Parallex from '../Components/Parallex'
import Stacking from '../Components/Stacking'
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
      <Parallex/>
      <Stacking/>
      <Grid/>
      <Services/>
      <Uniqueness/>
      <Ouragency/>
      <Timeline/>
      <Slider/>
      <Blogs/>
      <Faq/>
    </>
  )
}

export default Home
