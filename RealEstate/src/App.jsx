import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
