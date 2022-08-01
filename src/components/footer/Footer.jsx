import React from 'react';
import './footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Muhammad <span className="arafat">Arafat</span>
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookSquare />
        </a>
        <a href="https://instagram.com">
          <GrInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Personal. All right reserverd.</small>
      </div>
    </footer>
  );
};
export default Footer;
