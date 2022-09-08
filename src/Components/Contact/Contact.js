import { IconButton } from '@material-ui/core'
import {Facebook,Instagram,LinkedIn } from '@material-ui/icons'
import React from 'react'
import { Element } from 'react-scroll'
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>
        <div className="contact__container">
            <p>
                Email : <span>subhakamaraj@gmail.com</span>
            </p>
            <p>
                Github Username : <span>@janani5566</span>
            </p>
            <div className="contact_icons">
              <a href="google.com">
                 <IconButton>
                    <LinkedIn />
                 </IconButton>
              </a>
              <a href="google.com">
                 <IconButton>
                    <Facebook />
                 </IconButton>
              </a>
              <a href="google.com">
                 <IconButton>
                    <Instagram />
                 </IconButton>
              </a>
            </div>

        </div>
      </h1>
    </Element>
  )
}

export default Contact
