"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/images/slide1.jpg'
import './hero-section.css'
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css'; 
import { motion } from 'framer-motion';
const slideInVariants = {
  hidden: { opacity: 0, y:100 },
  visible: { opacity: 1,y:0, transition: { duration: 0.5 } },
};
function SectionHero() {
  return (
    <div className='slider-container'>
       <Swiper
        pagination={{
          dynamicBullets: true,clickable:true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={700}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        >
        <SwiperSlide>
        <div className='slide' style={{ backgroundImage: `url(${slide1.src})` }}>
            <div className='over-lay'>
              <motion.div className='slide-text' initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
              <h3 className='slide-heading' >we provide outstanding<br/> construction service</h3>
              <p style={{color:'white',textAlign:'start',fontSize:16}} className='slide-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aenean fermentum odio at diam rutrum,</p>
              <button style={{backgroundColor:'#fe574f',border:'none',padding:15,textTransform:'uppercase',fontWeight:700,color:'white',cursor:'pointer'}}>Learn More</button>
              </motion.div>
            </div>

            </div>   
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide' style={{ backgroundImage: `url(${slide1.src})` }}>
            <div className='over-lay'>
              <motion.div className='slide-text' initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
              <h3 className='' style={{color:'white',fontSize:'3rem',textAlign:'start',textTransform:'capitalize'}}>we provide outstanding<br/> construction service</h3>
              <p style={{color:'white',textAlign:'start',fontSize:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aenean fermentum odio at diam rutrum,</p>
              <button style={{backgroundColor:'#fe574f',border:'none',padding:15,textTransform:'uppercase',fontWeight:700,color:'white',cursor:'pointer'}}>Learn More</button>
              </motion.div>
            </div>

            </div>        
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide' style={{ backgroundImage: `url(${slide1.src})` }}>
            <div className='over-lay'>
              <motion.div className='slide-text'>
              <h3 className='' style={{color:'white',fontSize:'3rem',textAlign:'start',textTransform:'capitalize'}}>we provide outstanding<br/> construction service</h3>
              <p style={{color:'white',textAlign:'start',fontSize:16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Aenean fermentum odio at diam rutrum,</p>
              <button style={{backgroundColor:'#fe574f',border:'none',padding:15,textTransform:'uppercase',fontWeight:700,color:'white',cursor:'pointer'}}>Learn More</button>
              </motion.div>
            </div>

            </div>        
        </SwiperSlide>

        </Swiper>
        {/* <div className="custom-pagination "  slot="pagination" ></div> */}

    </div>
       
  )
}

export default SectionHero
