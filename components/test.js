'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './test.css';

import {  Autoplay,Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import slide2 from '../assets/images/house.jpg'
import Link from 'next/link';


export default function Test() {
  const [direction,setDirection] = useState('vertical')

  const [key, setKey] = useState(0); 

  const handleReachEnd = () => {
    if(direction ==='horizontal'){
      setDirection('vertical')
    }else{
      setDirection('horizontal')
    }
    setKey(prevKey => prevKey + 1); 
  };

  return (
    <div className='show-container'>
      <Swiper key={key}    onReachEnd={handleReachEnd}   direction={direction}   pagination={{     clickable: true,   }}   modules={[Pagination,Autoplay]}   className="mySwiper"   autoplay={{     delay: 5000,     disableOnInteraction: false,   }}   speed={900} >
        <SwiperSlide>
          <div className='show' style={{ backgroundImage: `url(${slide2.src})` ,height:'100%',width:'100%',}}>
           <div className='show-overlay'>
            <h3 className='slide-head'>Custom builder<br/> in Perth</h3>
            <Link href='#' className="find-more-btn">Find Out More</Link>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='show' style={{ backgroundImage: `url(${slide2.src})` ,height:'100%',width:'100%',}}>
        <div className='show-overlay'>
        <h3 className='slide-head'>Custom builder<br/> in Perth</h3>
        <Link href='#' className="find-more-btn">Find Out More</Link>
        </div>
        </div>
          </SwiperSlide>       
         <SwiperSlide>
         <div className='show' style={{ backgroundImage: `url(${slide2.src})` ,height:'100%',width:'100%',}}>
         <div className='show-overlay'>
         <h3 className='slide-head'>Custom builder<br/> in Perth</h3>
         <Link href='#' className="find-more-btn">Find Out More</Link>
        </div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='show' style={{ backgroundImage: `url(${slide2.src})` ,height:'100%',width:'100%',}}>
         <div className='show-overlay'>
         <h3 className='slide-head'>Custom builder<br/> in Perth</h3>
         <Link href='#' className='find-more-btn'>Find Out More</Link>
          </div>
          </div>
          </SwiperSlide>      
      </Swiper>
    </div>
  );
}
