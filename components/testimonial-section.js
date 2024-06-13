'use client'
import React from 'react'
import './testimonial-section.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import TestimonailSlide from './testimonial-slide'
import { Autoplay,Pagination } from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css'; 
function Testimonial() {
  return (
    <div className='testimonial-section'>

   <Swiper slidesPerView={1}    pagination={{   dynamicBullets: true,clickable:true, }} autoplay={{  delay: 5000,}} modules={[Pagination,Autoplay]} className="mySwiper"    breakpoints={{320: {  slidesPerView: 1,},640: {  slidesPerView: 1,},1024: {  slidesPerView: 1,},}}>
          <SwiperSlide >
              <TestimonailSlide/> 
          </SwiperSlide>
          <SwiperSlide >
              <TestimonailSlide/> 
          </SwiperSlide>
          <SwiperSlide >
              <TestimonailSlide/> 
          </SwiperSlide>
          
        </Swiper>


    </div>
  )
}

export default Testimonial
