'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './service-section.css'
import serviceImage from '../assets/images/ceiling-1.png'
import serviceImageOne from '../assets/images/1-2.png'
import serviceImageTwo from '../assets/images/1-3.png'
import serviceImageThree from '../assets/images/1-4.png'
import serviceImageFour from '../assets/images/1-5.png'
import serviceImageFive from '../assets/images/1-6.png'
import { motion } from 'framer-motion';

import Image from 'next/image';
const slideInVariants = {
  hidden: { opacity: 0, scale:0.8 },
  visible: { opacity: 1,scale:1, transition: { duration: 0.5 } },
};
function ServiceSection() {
  return (
    <div className='service-section'>
        <div style={{flex:1}}>
        <p style={{textTransform:'capitalize',color:'#797c7f'}}>services </p>
      <h1 className='service-heading'>We can handle all types<br/>
      of ceiling services</h1>
        </div>
    
      <div style={{flex:3}} className='service-container'>
        <motion.div  className='service'   initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
           <div className='flag'>
             <Image src={serviceImage} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Instalation</h3>
          <p style={{color:'#797c7f'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10,overflow:'hidden'}}>
          <p style={{cursor:'pointer',fontWeight:500}} className='read-more'>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}} className='arrow'/>  
          </div>        
          </motion.div>

          <motion.div  className='service'  initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
           <div className='flag'>
             <Image src={serviceImageOne} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Repair</h3>
          <p style={{color:'#797c7f'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10,overflow:'hidden'}}>
          <p style={{cursor:'pointer',fontWeight:500}} className='read-more'>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}} className='arrow'/>  
          </div>        
          </motion.div>
          <motion.div  className='service'  initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
           <div className='flag'>
             <Image src={serviceImageTwo} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Inspection</h3>
          <p style={{color:'#797c7f'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10,overflow:'hidden'}}>
          <p style={{cursor:'pointer',fontWeight:500}} className='read-more'>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}} className='arrow'/>  
          </div>        
          </motion.div>
          <motion.div  className='service'  initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
           <div className='flag'>
             <Image src={serviceImageThree} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Renovation</h3>
          <p style={{color:'#797c7f'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10,overflow:'hidden'}}>
          <p style={{cursor:'pointer',fontWeight:500}} className='read-more'>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}} className='arrow'/>  
          </div>     
          </motion.div>
          <motion.div  className='service'  initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
           <div className='flag'>
             <Image src={serviceImageFour} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Maintenance</h3>
          <p style={{color:'#797c7f'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10,overflow:'hidden'}}>
          <p style={{cursor:'pointer',fontWeight:500}} className='read-more'>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}} className='arrow'/>  
          </div>       
          </motion.div>
          <motion.div className='service'  initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
           <div className='flag'>
             <Image src={serviceImageFive} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Replacement</h3>
          <p style={{color:'#797c7f'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10,overflow:'hidden'}}>
          <p style={{cursor:'pointer',fontWeight:500}} className='read-more'>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}} className='arrow'/>  
          </div>      
          </motion.div>
      </div>
    </div>
  )
}

export default ServiceSection
