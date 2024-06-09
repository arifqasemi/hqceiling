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
    <div className='testimonial-section' style={{paddingBottom:20,}}>
        <div className='testimonial-head' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:20}}>
            <p style={{color:'#797c7f'}}>TESTIMONIAL</p>
           <h2 style={{fontSize:45,textAlign:'center'}}>Happy Client Says<br/>About Us</h2> 
        </div>

   <Swiper slidesPerView={3}    pagination={{
          dynamicBullets: true,clickable:true,el:'.custom-dots'
        }} autoplay={{  delay: 5000,}} modules={[Pagination,Autoplay]} className="mySwiper">
          <SwiperSlide >
              <TestimonailSlide/> 
          </SwiperSlide>
          <SwiperSlide >
              <TestimonailSlide/> 
          </SwiperSlide>
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
        <div className="custom-dots "  slot="pagination" style={{marginTop:10}}></div>


    </div>
  )
}

export default Testimonial
