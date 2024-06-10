'use client'
import React from 'react'
import './blog-section.css'
import Post from './posts'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay,Pagination } from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css'; 

function BlogSection() {
  return (
    <div className='blog-container'>
      <p style={{marginBottom:20,color:'#797c7f'}}>FROM OUR BLOG</p>
      <h2 style={{fontSize:45}}>Articles About Ceiling
      </h2>
        <Swiper slidesPerView={3}    pagination={{  dynamicBullets: true,clickable:true,}} autoplay={{  delay: 5000,}} modules={[Pagination,Autoplay]}  breakpoints={{320: {  slidesPerView: 1,},640: {  slidesPerView: 2,},1024: {  slidesPerView: 3,},}}>
          <SwiperSlide >
             <Post/>  
          </SwiperSlide>
          <SwiperSlide >
             <Post/>  
          </SwiperSlide>
          <SwiperSlide >
             <Post/>  
          </SwiperSlide>
          <SwiperSlide >
             <Post/>  
          </SwiperSlide>
          <SwiperSlide >
             <Post/>  
          </SwiperSlide>
           
        </Swiper>
       {/* <div className="post-custom-pagination "  slot="pagination" style={{height:20}}></div> */}
    </div>
  )
}

export default BlogSection
