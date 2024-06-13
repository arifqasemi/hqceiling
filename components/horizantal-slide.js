'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './test.css';
import {  Autoplay,Navigation } from 'swiper/modules';

export default function HrSlide() {
  return (
    <>
      <Swiper
        direction='horizontal'
        Navigation={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>Slide horizantal</SwiperSlide>
        <SwiperSlide>Slide sdf</SwiperSlide>
        <SwiperSlide>Slide 3sdsd</SwiperSlide>
        <SwiperSlide>Slide 4sdfsd</SwiperSlide>
      </Swiper>
    </>
  );
}
