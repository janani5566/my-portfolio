import React from 'react'
import Header from './Components/Header/Header'
import Projectcontainer from './Components/Projectcontainer/Projectcontainer'
import Skillcontainer from './Components/Skillcontainer/Skillcontainer'
import Topcontainer from './Components/Topcontainer/Topcontainer'
import "./App.css"
import Experiencecontainer from './Components/Experiencecontainer/Experiencecontainer'
const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
      <Experiencecontainer />
    </div>
  )
}

export default App
