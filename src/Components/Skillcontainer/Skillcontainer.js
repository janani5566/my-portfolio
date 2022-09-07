import React from 'react'
import { Element } from 'react-scroll'
import Skilling from "../Header/image/Skilling.jpg"
import LinearProgress from "@material-ui/core/LinearProgress"
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    <Element className="Skillcontainer" id="skills">
      <div className='Skillcontainer__image'>
        <img src={Skilling} alt =""/>
      </div>
      <div className="Skillcontainer__text">
        <h2>SKILLSET</h2>
        <div className="Skillcontainer__skillset">
         <h5>React</h5>
         <div className="Skillcontainer__slider Skillcontainer__slider1">
            <LinearProgress variant="determinate" value={90} />
         </div>
        </div>
        <div className="Skillcontainer__skillset">
         <h5>HTML</h5>
         <div className="Skillcontainer__slider Skillcontainer__slider2">
            <LinearProgress variant="determinate" value={75} />
         </div>
        </div>
        <div className="Skillcontainer__skillset">
         <h5>CSS</h5>
         <div className="Skillcontainer__slider Skillcontainer__slider3">
            <LinearProgress variant="determinate" value={80} />
         </div>
        </div>
        <div className="Skillcontainer__skillset">
         <h5>Jquery</h5>
         <div className="Skillcontainer__slider Skillcontainer__slider4">
            <LinearProgress variant="determinate" value={70} />
         </div>
         <div className="Skillcontainer__skillset">
         <h5>GraphQl</h5>
         <div className="Skillcontainer__slider Skillcontainer__slider5">
            <LinearProgress variant="determinate" value={50} />
         </div>
        </div>
        <div className="Skillcontainer__skillset">
         <h5>React</h5>
         <div className="Skillcontainer__slider Skillcontainer__slider6">
            <LinearProgress variant="determinate" value={60} />
         </div>
        </div>
        </div>
      </div>
    </Element>
  )
}

export default Skillcontainer
