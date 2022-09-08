import React from 'react'
import Header from './Components/Header/Header'
import Projectcontainer from './Components/Projectcontainer/Projectcontainer'
import Skillcontainer from './Components/Skillcontainer/Skillcontainer'
import Topcontainer from './Components/Topcontainer/Topcontainer'
import "./App.css"
import Experiencecontainer from './Components/Experiencecontainer/Experiencecontainer'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Experiencecontainer />
      <Contact />
    </div>
  )
}

export default App
