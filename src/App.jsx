import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'

const App = () => {
  return (
    <>
      {/* Header section */}
      <Header />
      {/* Hero section */}
      <Hero />
      {/* projects section */}
      <Projects />
       {/* about section */}
       <About />
       {/* Skills */}
       <Skills />
    </>

  )
}

export default App