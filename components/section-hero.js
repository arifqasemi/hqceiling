"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide-1.jpeg'
import './hero-section.css'
import { Autoplay,Pagination } from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/swiper-bundle.css'; 
import { motion } from 'framer-motion';
import Link from 'next/link';
import Test from './test';


const slideInVariants = {
  hidden: { opacity: 0, y:100 },
  visible: { opacity: 1,y:0, transition: { duration: 0.5 } },
};
function SectionHero() {
  return (
    <Test/>

       
  )
}

export default SectionHero
