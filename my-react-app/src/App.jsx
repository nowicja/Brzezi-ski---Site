import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Section from './Components/Section/Section'
import Section2 from './Components/Section2/Section2'
import Info from './Components/Info/Info'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Section/>
      <Section2/>
      <Info/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
