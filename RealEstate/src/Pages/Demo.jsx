import React from 'react'
import Hero from '../DemoComponents/Hero'   
import Info from '../DemoComponents/Info' 
import Gallery from '../DemoComponents/Gallery'
import Info2 from '../DemoComponents/Info2'
import ScrollToTop from '../Components/ScrollToTop.jsx'

const Demo = () => {
  return (
    <>
    <ScrollToTop />
    <Hero/>
    <Info/>
    <Gallery/>  
    <Info2/>
    </>
  )
}

export default Demo