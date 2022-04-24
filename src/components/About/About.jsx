import React from 'react'
import "./about.css";
import ME from "../../assets/ME2.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";


export const About = () => {
  return (
    <section id = "about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt= "about Image"/>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/> 
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon'/> 
                <h5>Clients</h5>
                <small>20+ Worldwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className='about__icon'/> 
                <h5>Projects</h5>
                <small>30+ Completed</small>
              </article>
            </div>

              <p>
                Fullstack developer with over 2 years of professional working experience as quality assurance analyst
              </p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
    
  )
}

export default About;