import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id:1,
    image: IMG1,
    title:"Social Media ",
    github: "https://github.com/OladeleAlo/Social_Media",
    demo: "https://2go-reloaded.netlify.app/"
  },
  {
  id:2,
  image: IMG2,
  title:"Bitcoin Charts",
  github: "https://github.com/OladeleAlo/btc-chart",
  demo: "https://btc-ethdashboard.netlify.app/"
},
{
  id:3,
  image: IMG6,
  title:"Ecommerce App",
  github: "https://github.com/OladeleAlo/Ecommerce-Dashboard",
  demo: "https://app.netlify.com/sites/dailytodo-task/overview"
  },

{
id:4,
image: IMG4,
title:"Landing page",
github: "https://github.com/OladeleAlo/landing-page",
demo: "https://landingpage-viewport.netlify.app/"
},
{
  id:5,
  image: IMG5,
  title:"Daily Todo List",
  github: "https://github.com/OladeleAlo/DailyTaskTodo/tree/master",
  demo: "https://landingpage-viewport.netlify.app/"
  },
  {
    id:6,
    image: IMG3,
    title:"Weather App",
    github: "https://github.com/OladeleAlo/LongLatWeatherApp",
    demo: "https://longandlatweatherapp.netlify.app/s"
    },



]
export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
         data.map(({id,image,title,github,demo})=>{
           return (
            <article  key= {id}className="portfolio__item">
            <div className="portfolio__item-image">
              <img src = {image} alt = {title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
            
          </article>
           )
         })
       }
      </div>
    </section>
  )
}
export default Portfolio;