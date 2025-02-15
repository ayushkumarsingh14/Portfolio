import React, { useState } from 'react'


import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';



function App() {
  
  
  const toggleNav = () => {
    setNav(!nav);
  }

  const closeNav = () => {
    setNav(false)
  }
  const menuVariants = {
    open: {
        x: 0,
        transition: {
        stiffness: 20,
        damping: 15
        }
    },
    closed: {
        x: '-100%',
        transition: {
        stiffness: 20,
        damping: 15
        }
    }
}

  return (
    <div className='overflow-hidden'>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Portfolio/>

    </div>
  )
}

export default App
