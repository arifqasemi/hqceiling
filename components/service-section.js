'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './service-section.css'

import { motion } from 'framer-motion';
import HomeTab from './tabs/homeTab'
import RenovationTab from './tabs/renovationTab'
import CommercialTab from './tabs/commercialTab'
import Image from 'next/image';

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
        <h3>Our services  </h3>
        <h2 style={{fontSize:56,fontWeight:800}}>Our construction services</h2>
        <p style={{fontSize:16,marginTop:20}}>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
        <div className='service'>
          <div className='service-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:30,color:'white'}}>Building Construction</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='service-cta'>
               <h4>View More</h4>
             </div>
          </div>
        </div>
     </div>

    </div>
  )
}

export default ServiceSection
