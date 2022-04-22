import React from 'react';
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
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
    name: "Tina Mba",
    review: "Lorem ipsum dolor sit,amet consectetur adipisicing elit. Distinctio quae non ea quos, odit repellendus eaque minus quia unde enim architecto porro iste tempora laudantium exercitationem cum officia ex! Id amet consectetur adipisicing elit. Unde tempora, voluptatum necessitatibus quibusdam aspernatur quas quos atque ut laborum dolore vero laudantium! Dicta?"
  },
  {
    avatar:AVTR2,
    name: "Lanre Ogogo",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempora, voluptatum necessitatibus quibusdam aspernatur quas quos atque ut laborum dolore amet consectetur adipisicing elit. Distinctio quae non ea quos, odit repellendus eaque minus quia unde enim architecto porro iste tempora laudantium exercitationem cum officia ex! Id vero laudantium! Dicta?"
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
              </SwiperSlide>
            )
          })
        }            
      </Swiper>
    </section>
  )
}

export default testimonials