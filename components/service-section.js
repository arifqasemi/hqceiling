'use client'
import React, { useState } from 'react'
import './service-section.css'

import { motion } from 'framer-motion';
import HomeTab from './tabs/homeTab'
import RenovationTab from './tabs/renovationTab'
import CommercialTab from './tabs/commercialTab'
import Image from 'next/image';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ServiceSection() {
  const [homeTab,setHomeTab] = useState(true)
  const [renotionTab,setRenotionTab] = useState(false)
  const [commercialTab,setCommercialTab] = useState(false)

  const tabHandler =(tabName)=>{
    if(tabName ==="home"){
      setCommercialTab(false)
      setRenotionTab(false)
      setHomeTab(true)
    }
    if(tabName ==="renovation"){
      setCommercialTab(false)
      setHomeTab(false)
      setRenotionTab(true)
    }
    if(tabName ==="commercial"){
      setHomeTab(false)
      setRenotionTab(false)
      setCommercialTab(true)
    }
    // console.log(tabName)

  }

  return (
    <div className='service-section'>
     <div className='service-section-wrapper'>
        <h3 style={{color:'#ffb703',textTransform:'uppercase',marginBottom:20}}>Our services  </h3>
        <h2 style={{fontSize:56,fontWeight:800,marginBottom:20}}>Our construction services</h2>
        <p style={{fontSize:16,marginTop:10,color:'#667282'}}>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
        <div className='services' style={{marginTop:30}}>
        <div className='service' style={{backgroundImage:'url("/images/service-img-1.jpg")'}}>
        <div className="overlay">
          <div className='service-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Building Construction</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='service-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
          
        </div>
        <div className='service' style={{backgroundImage:'url("/images/service-img-2.jpg")'}}>
        <div className="overlay">
           <div className='service-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Architecture Design</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='service-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
         
        </div>
        <div className='service' style={{backgroundImage:'url("/images/service-img-3.jpg")'}}>
        <div className="overlay">
          <div className='service-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Building Renovation</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='service-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
          
        </div>
        <div className='service' style={{backgroundImage:'url("/images/service-img-4.jpg")'}}>
        <div className="overlay">
          <div className='service-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Building Maintenance</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='service-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
          
        </div>
        </div>

        <div className='btn' style={{marginTop:50,backgroundColor:'#ffb703',padding:'20px 30px',borderRadius:15,cursor:'pointer'}}>
          <div className='btn-wrapper' style={{display:'flex'}}>
              <h3 style={{color:'white'}}>View All Services</h3>
              <FontAwesomeIcon icon={faCircleArrowRight} color='white' style={{marginTop:5,marginLeft:10}}/>
          </div>
        </div>
     </div>

    </div>
  )
}

export default ServiceSection
