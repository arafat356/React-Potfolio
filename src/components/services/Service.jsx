import React from 'react';
import "./service.css";
import {BiCheck} from "react-icons/bi";

export const Service = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Fullstack Developer</h3>
          </div>
          <ul className="service__list">
              <li>
                <BiCheck  className='service__list-icon' />
                <p>Developing a responsive fullstack web application according to users view-port</p>
              </li>
              <li>
                <BiCheck  className='service__list-icon' />
                < p>Developing a bug free fullstack web applications from quality assuarance experience.</p>
              </li>
                            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
              <li><BiCheck  className='service__list-icon' />
              <p>Developing a responsive website according to users view-port </p>
              </li>
              <li><BiCheck  className='service__list-icon' />
              <p>Developing a bug free web applications using quality assuarance experience</p>
              </li>
            
              
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Backend Developer</h3>
          </div>
          <ul className="service__list">
          <li><BiCheck  className='service__list-icon' />
              <p>Developing a responsive website according to users view-port </p>
              </li>
              <li><BiCheck  className='service__list-icon' />
              <p>Developing a bug free web applications using quality assuarance experience</p>
              </li>
              
          </ul>
        </article>
      </div>


    </section>
  )
}

export default Service;