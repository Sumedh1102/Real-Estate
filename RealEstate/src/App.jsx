import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
const App = () => {
  return (
<>
 <Navbar/>
 <Outlet />
 <Footer/>
</>
  )
}

export default App
