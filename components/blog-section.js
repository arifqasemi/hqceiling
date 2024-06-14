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
      <p style={{marginBottom:20,color:'gray',fontWeight:500}}>News & Updates</p>
      <h2 style={{fontSize:45,color:'#1e81b0'}}>Recent News
      </h2>
      <div className='post-wrapper'>
         <Post/>
        <Post/>
        <Post/>
      </div>
       
    </div>
  )
}

export default BlogSection
