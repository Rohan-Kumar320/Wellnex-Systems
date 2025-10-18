import React from 'react'
import Preloader from './components/ui/Preloader'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import AppsShowcase from './components/sections/AppsShowcase'
import ComingSoon from './components/sections/ComingSoon'
import Waitlist from './components/sections/Waitlist'

const App = () => {
  return (
    <>
    <Preloader />
    <Navbar />
    <Hero />
    <About />
    <AppsShowcase />
    <ComingSoon />
    <Waitlist />

    </>
  )
}

export default App