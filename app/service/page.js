'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay,Pagination } from 'swiper/modules';
import Image from 'next/image';
import HeroImage from '../../assets/images/slide1.jpg'
import ServiceSection from '../../components/service-section'


function Page() {
  return (
   <>
   <div style={{height:'60vh',backgroundImage:`url(${HeroImage.src})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div style={{height:'60vh',backgroundColor:'#00000082',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h3 style={{color:'white',fontSize:55,fontWeight:600}}>Services</h3>
      </div>
    </div>
    <div style={{backgroundColor:'#f9f3ee',width:'100%'}}>
        <ServiceSection/>
    </div>
   </>
    

  )
}

export default Page
