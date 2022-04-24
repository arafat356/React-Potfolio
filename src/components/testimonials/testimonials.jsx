import React from 'react';
import "./testimonials.css";
import AVTR1 from "../../assets/tawakalt.PNG";
import AVTR2 from "../../assets/chuks.PNG";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Tawakalt Ogunjobi ",
    review: "I had the pleasure to work with Oladele Alo as I fondly call him, Oladele is very hard working. He always wants to put his best in whatever Task I assigned to him, He would take his time to get clarification whenever he needs clarity. He's very organised. One thing i admire about Oladele is his determination to succeed. I remembered all the efforts and dedication he put in passing his German Language Exam. Any employee would be lucky to have him as part of their team. Cheers to a brighter future Oladele!"
  },
  {
    avatar:AVTR2,
    name: "Chuks Ojugo",
    review: "Chukwufumnanya is proactive, eager to learn, and a go-getter. Chukwufumnanya is a team player who understands teamwork and is always ready to help the team to achieve greatness. I am lucky to have worked with such a friend, colleague, and brother."
  },
  {
    avatar: AVTR3,
    name: "Chisom SafeSpace",
    review: "Lorem ipsum dolor sit,amet consectetur adipisicing elit. Distinctio quae non ea quos, odit repellendus eaque minus quia unde enim architecto porro iste tempora laudantium exercitationem cum officia ex! Id amet consectetur adipisicing elit. Unde tempora, voluptatum necessitatibus quibusdam aspernatur quas quos atque ut laborum dolore vero laudantium! Dicta?"
  },
  {
    avatar: AVTR4,
    name: "Mikel Agu",
    review: "Lorem ipsum dolor sit,amet consectetur adipisicing elit. Distinctio quae non ea quos, odit repellendus eaque minus quia unde enim architecto porro iste tempora laudantium exercitationem cum officia ex! Id amet consectetur adipisicing elit. Unde tempora, voluptatum necessitatibus quibusdam aspernatur quas quos atque ut laborum dolore vero laudantium! Dicta?"
  },

]
const testimonials = () => {
  return (
    <section id = "testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper  
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
       className="container testimonials__container">
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src= {avatar} alt="Avatar One"/>         
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className="client__review">{review}
              </small>
              <a  className = " btn btn-primary" href= "https://www.linkedin.com/in/oladele-alo/details/recommendations/?detailScreenTabIndex=2" target="_blank">View Source</a>
              </SwiperSlide>
            )
          })
        }            
      </Swiper>
    </section>
  )
}

export default testimonials