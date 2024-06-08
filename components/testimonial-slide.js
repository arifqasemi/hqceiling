import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import './testimonial-section.css'
import worker from '../assets/images/2.jpg'
import workerOne from '../assets/images/3.jpg'
import workerTwo from '../assets/images/4.jpg'
import workerThree from '../assets/images/1-4.png'
import workerFour from '../assets/images/1-5.png'
import workerFive from '../assets/images/1-6.png'

import Image from 'next/image';

function TestimonialSlide() {
  return (
      <div  className='testimonial-container'>
        <div  className='testimonial' >
           <div className='testimonial-flag' >
           <FontAwesomeIcon icon={faQuoteLeft} />
           </div>
          {/* <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Instalation</h3> */}
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10,}}>
          <Image src={workerOne} width={50} height={50} alt='service' style={{height:66,width:66,borderRadius:'50%'}}/>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
             <p>Joe Robert</p> 
             <p>Bussiness Man</p> 
          </div>
         
          </div>      
          </div>
      </div>
  )
}

export default TestimonialSlide
