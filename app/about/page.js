'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay,Pagination } from 'swiper/modules';
import AboutSection from '@/components/about-section';
import Image from 'next/image';
import HeroImage from '../../assets/images/slide1.jpg'
import OrderSection from '@/components/order-section';
import TeamSection from '@/components/team-section';
import Space from '@/components/space';


function Page() {
  return (
   <>
   <div style={{height:'60vh',backgroundImage:`url(${HeroImage.src})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div style={{height:'60vh',backgroundColor:'#00000082',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <h3 style={{color:'white',fontSize:55,fontWeight:600}}>About Us</h3>
      </div>
    </div>
    <AboutSection/>
    <Space/>
    <OrderSection/>
    {/* <TeamSection/> */}
   </>
    

  )
}

export default Page
