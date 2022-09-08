import React from 'react'
import Experience from '../ExperienceBox/Experience'
import { Element } from 'react-scroll'
import "./Experiencecontainer.css"

const Experiencecontainer = () => {
  return (
   <Element className="experiencecontainer" id="exp">
    <h1>Experience</h1>
    <div className="experiencecontainer__info">
      <Experience number="+10" title="clients" />
      <Experience number="60+" title="Projects" style={{backgroundColor: "#f64c08"}}/>
      <Experience number="6+" title="Years teaching" />
      <Experience number="60000+" title="Students got trained" />
    </div>
   </Element>
  )
}

export default Experiencecontainer
