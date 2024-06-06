"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/images/slide1.jpg'
import Image from 'next/image'
import './hero-section.css'
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'; 

function SectionHero() {
  return (
    <div className='slider-container'>
       <Swiper
        pagination={{
          dynamicBullets: true,clickable:true,el:'.custom-pagination'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        >
        <SwiperSlide>
        <div className='slide' style={{ backgroundImage: `url(${slide1.src})` }}>
            <div className='over-lay'>
              <div className='slide-text'>
              <h3 className='' style={{color:'white',fontSize:'3rem',textAlign:'start',textTransform:'capitalize'}}>we provide outstanding<br/> construction service</h3>
              <p style={{color:'white',textAlign:'start'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aenean fermentum odio at diam rutrum,</p>
              <button style={{backgroundColor:'yellow',width:200,borderRadius:10,border:'none',height:45,textTransform:'uppercase',fontWeight:700}}>Learn More</button>
              </div>
            </div>

            </div>   
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide' style={{ backgroundImage: `url(${slide1.src})` }}>
            <div className='over-lay'>
              <div className='slide-text'>
              <h3 className='' style={{color:'white',fontSize:'3rem',textAlign:'start',textTransform:'capitalize'}}>we provide outstanding<br/> construction service</h3>
              <p style={{color:'white',textAlign:'start'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aenean fermentum odio at diam rutrum,</p>
              <button style={{backgroundColor:'yellow',width:200,borderRadius:10,border:'none',height:45,textTransform:'uppercase',fontWeight:700}}>Learn More</button>
              </div>
            </div>

            </div>        
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide' style={{ backgroundImage: `url(${slide1.src})` }}>
            <div className='over-lay'>
              <div className='slide-text'>
              <h3 className='' style={{color:'white',fontSize:'3rem',textAlign:'start',textTransform:'capitalize'}}>we provide outstanding<br/> construction service</h3>
              <p style={{color:'white',textAlign:'start'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aenean fermentum odio at diam rutrum,</p>
              <button style={{backgroundColor:'yellow',width:200,borderRadius:10,border:'none',height:45,textTransform:'uppercase',fontWeight:700}}>Learn More</button>
              </div>
            </div>

            </div>        
        </SwiperSlide>

        </Swiper>
        <div className="custom-pagination "  slot="pagination" ></div>

    </div>
       
  )
}

export default SectionHero
