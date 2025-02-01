import React from 'react'
import Hero from './components/Hero'
import Abexre from './components/Abexre'
import Testimony from './components/Testimony'
import Technologies from './components/technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black'>
      <Hero />
      <Abexre />
      <Testimony />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}

export default App

/* http://localhost:5174/ */
