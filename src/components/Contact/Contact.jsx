import React , { useRef } from 'react'
import "./contact.css";
import emailjs from 'emailjs-com';
import {RiMessengerLine} from "react-icons/ri";
import {MdOutlineMailOutline} from "react-icons/md";
import {AiOutlineWhatsApp} from "react-icons/ai";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5xmoovh', 'template_a55a8us', form.current, '6lkh2vUTvNFwTfBiq')
     
      e.target.reset()
  };
  return (
    <section id = "contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>oladele2alo@gmail.com</h5>
            <a href="mailto:oladele2alo@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>unlimited connections</h5>
            <a href="https://www.facebook.com/oladele.alo/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+491788437064</h5>
            <a href="https://api.whatsapp.com/send?phone+491788437064" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name = "name" placeholder= "Your Full Name" required></input>
          <input type="email" name = "email" placeholder="Your Email" required></input>
         <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
         <button type = "submit" className='btn btn-primary'>Send Message</button> 
        </form>
      </div>

    </section>
  )
}

export default Contact;