'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './test.css';

import {  Autoplay,Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import slide2 from '../assets/images/slide-image.jpg'
import slide3 from '../assets/images/ceiling-image.jpg'
import slide4 from '../assets/images/ceiling-image-2.jpg'
import slide5 from '../assets/images/ceiling-hero.jpg'

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
          <div className='show' style={{ backgroundImage: `url(${slide3.src})` ,height:'100%',width:'100%',}}>
           <div className='show-overlay'>
           <p style={{color:'white',textTransform:'uppercase',marginBottom:10,fontSize:13,fontWeight:600}}>Intellegent Design, Quality build</p>
            <h3 className='slide-head'>Custom builder<br/> in Perth</h3>
            <p style={{color:'white',textAlign:'start'}}>To enhance the aesthetic and functional value of every space we touch,<br/> through exceptional ceiling construction services.</p>
            <Link href='#' className="find-more-btn">Find Out More</Link>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='show' style={{ backgroundImage: `url(${slide4.src})` ,height:'100%',width:'100%',}}>
        <div className='show-overlay'>
          <p style={{color:'white',textTransform:'uppercase',marginBottom:10,fontSize:13,fontWeight:600}}>Intellegent Design, Quality build</p>
        <h3 className='slide-head'>Commercially Compliant <br/>Builders</h3>
        <p style={{color:'white',textAlign:'start'}}>To enhance the aesthetic and functional value of every space we touch,<br/> through exceptional ceiling construction services.</p>
        <Link href='#' className="find-more-btn">Find Out More</Link>
        </div>
        </div>
          </SwiperSlide>       
         <SwiperSlide>
         <div className='show' style={{ backgroundImage: `url(${slide5.src})` ,height:'100%',width:'100%',}}>
         <div className='show-overlay'>
         <p style={{color:'white',textTransform:'uppercase',marginBottom:10,fontSize:13,fontWeight:600}}>Intellegent Design, Quality build</p>
         <h3 className='slide-head'>Custom builder<br/> in Perth</h3>
         <p style={{color:'white',textAlign:'start'}}>To enhance the aesthetic and functional value of every space we touch,<br/> through exceptional ceiling construction services.</p>
         <Link href='#' className="find-more-btn">Find Out More</Link>
        </div>
        </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className='show' style={{ backgroundImage: `url(${slide2.src})` ,height:'100%',width:'100%',}}>
         <div className='show-overlay'>
         <p style={{color:'white',textTransform:'uppercase',marginBottom:10,fontSize:13,fontWeight:600}}>Intellegent Design, Quality build</p>
         <h3 className='slide-head'>Custom builder<br/> in Perth</h3>
         <p style={{color:'white',textAlign:'start'}}>To enhance the aesthetic and functional value of every space we touch,<br/> through exceptional ceiling construction services.</p>
         <Link href='#' className='find-more-btn'>Find Out More</Link>
          </div>
          </div>
          </SwiperSlide>      
      </Swiper>
    </div>
  );
}
