import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ExperienceMain from './sections/ExperienceMain'


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
      {/* Experience Section */}
      <ExperienceMain />
      {/* Contac us section */}
      <Contact />
      {/* Footer */}
      <Footer />


    </>

  )
}

export default App