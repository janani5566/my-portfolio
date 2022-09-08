import React from 'react'
import { Element } from 'react-scroll'
import Project1 from '../Project/Project1'
import "./Projectcontainer.css"
const Projectcontainer = () => {
 const projects = [
    {
        img:"https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-hand-drawn-learning-tools-book-education-background-image_353765.jpg",
        title:"Facebook",
        desc:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
        link: "www.google.com",

    },
    {
        img:"https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-hand-drawn-learning-tools-book-education-background-image_353765.jpg",
        title:"Facebook",
        desc:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
        link: "www.google.com",
    },
    {
        img:"https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-hand-drawn-learning-tools-book-education-background-image_353765.jpg",
        title:"Facebook",
        desc:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
        link: "www.google.com",
    },
    {
        img:"https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-hand-drawn-learning-tools-book-education-background-image_353765.jpg",
        title:"Facebook",
        desc:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
        link: "www.google.com",
    },
    {
        img:"https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-hand-drawn-learning-tools-book-education-background-image_353765.jpg",
        title:"Facebook",
        desc:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
        link: "www.google.com",
    },


    {
        img:"https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-hand-drawn-learning-tools-book-education-background-image_353765.jpg",
        title:"Facebook",
        desc:"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
        link: "www.google.com",
    },


 ]
  return (
    <Element className= "projectcontainer"id="projects">
        <h1>Projects</h1>
        <p>here are some projects which I done for making lives of people easy.</p>

  <div className="projectcontainer__projects">
     {
        projects.map((project,index)=>{
            return (
                <Project1
                     key={index}
                     img={project.img}
                     title={project.title}
                     desc={project.desc}
                     link={project.link}/>
            )
        })
    }
</div>
    </Element>
  )
}

export default Projectcontainer
