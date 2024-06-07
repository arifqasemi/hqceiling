import React from 'react'
import './about-section.css'
import Statistic from './statistic'
import Image from 'next/image'
import img1 from '../assets/images/about-1-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function AboutSection() {
  return (
    <div className='about-section'>
        <Statistic/>
       <div className='content'>
         <div className='image-container'>
            <div>
                <Image src={img1} width={100} height={100} alt='image' style={{height:'80vh',width:'90%'}}/>
            </div>
            <div style={{display:'flex',alignItems:'flex-end',position:'relative',top:30,left:'-70px'}}>
                <Image src={img1} width={100} height={100} alt='image' style={{height:'60vh',width:'90%'}}/>
            </div>
         </div>
         <div style={{maxWidth:'50%'}}>
            <p style={{marginBottom:20}}>About Us</p>
            <h1 style={{fontSize:40,marginBottom:20}}>We make high quality
            <br/>roofing for your homes</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum facilisis thr sem. Imperdiet massa turpis sit Lorem ipsum dolor sit amet</p>
             <div style={{display:'flex',marginTop:20,flexWrap:'wrap',justifyContent:'space-between'}}>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px' }} />         
                 <p>Professional Worker</p>
               </div>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px' }} />         
                 <p>Trusted Company</p>
               </div>
             
             </div>
             <div style={{display:'flex',marginTop:20,flexWrap:'wrap',justifyContent:'space-between'}}>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px' }} />         
                 <p>Best Quality Materials</p>
               </div>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px' }} />         
                 <p>Affordable Price</p>
               </div>
             </div>
             <button style={{height:40,marginTop:29,backgroundColor:'yellow',border:'none',cursor:'pointer',width:150,borderRadius:10}}>Learn More</button>
         </div>
       </div>
    </div>
  )
}

export default AboutSection
