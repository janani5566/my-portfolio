import React from 'react'
import { Element } from 'react-scroll'
import skills from "../Header/image/skills.jpg"
import LinearProgress from "@material-ui/core/LinearProgress"

const Skillcontainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
      <div className='skillcontaniner__image'>
        <img src={skills} alt =""/>
      </div>
      <div className="skillcontainer__text">
        <h2>SKILLSET</h2>
        <div className="skillcontainer__skillset">
         <h5>React</h5>
         <div className="skillcontainer__slider skillcontainer__slider1">
            <LinearProgress variant="determinate value{90}"/>
         </div>
        </div>
        <div className="skillcontainer__skillset">
         <h5>HTML</h5>
         <div className="skillcontainer__slider skillcontainer__slider2">
            <LinearProgress variant="determinate value{75}"/>
         </div>
        </div>
        <div className="skillcontainer__skillset">
         <h5>CSS</h5>
         <div className="skillcontainer__slider skillcontainer__slider3">
            <LinearProgress variant="determinate value{80}"/>
         </div>
        </div>
        <div className="skillcontainer__skillset">
         <h5>Jquery</h5>
         <div className="skillcontainer__slider skillcontainer__slider4">
            <LinearProgress variant="determinate value{70}"/>
         </div>
         <div className="skillcontainer__skillset">
         <h5>GraphQl</h5>
         <div className="skillcontainer__slider skillcontainer__slider5">
            <LinearProgress variant="determinate value{50}"/>
         </div>
        </div>
        <div className="skillcontainer__skillset">
         <h5>React</h5>
         <div className="skillcontainer__slider skillcontainer__slider6">
            <LinearProgress variant="determinate value{60}"/>
         </div>
        </div>
        </div>
      </div>
    </Element>
  )
}

export default Skillcontainer
