import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

const App = () => {
  return (
    <>
      {/* Header section */}
      <Header />
{/* Hero section */}
      <Hero />
      {/* projects section */}
      <Projects />
    </>

  )
}

export default App