import React from 'react'
import './Projects.css'
import project1 from '../../assets/Project1.jpg'
import project2 from '../../assets/Project2.jpg'
import project3 from '../../assets/Project3.jpg'
function Projects() {
  return (
    <div>
        <div className="projects">
            <div className="text">
                <h1>Projekty</h1>
                <div className="breaker"></div>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={project1} alt="" />
                    <p>Remont łazienki</p>
                </div>
                <div className="card">
                    <img src={project2} alt="" />
                    <p>Odnowa remizy OSP Baszków</p>
                </div>
                <div className="card">
                    <img src={project3} alt="" />
                    <p>Odnowa Szkoły Podstawowej w Baszkowie</p>
                </div>
            </div>
            <div className="touch">
                <h1>Zobacz więcej!</h1>
                <button className="btn">Kliknij mnie!</button>
            </div>
        </div>
    </div>
  )
}

export default Projects