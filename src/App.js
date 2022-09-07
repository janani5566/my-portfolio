import React from 'react'
import Header from './Components/Header/Header'
import Projectcontainer from './Components/Projectcontainer/Projectcontainer'
import Skillcontainer from './Components/Skillcontainer/Skillcontainer'
import Topcontainer from './Components/Topcontainer/Topcontainer'
import "./App.css"
const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Projectcontainer />
    </div>
  )
}

export default App
