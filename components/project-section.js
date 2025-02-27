'use client'
import React, { useState } from 'react'
import './project-section.css'

import { motion } from 'framer-motion';
import HomeTab from './tabs/homeTab'
import RenovationTab from './tabs/renovationTab'
import CommercialTab from './tabs/commercialTab'
import Image from 'next/image';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Projects() {
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
    <div className='project-section'>
     <div className='project-section-wrapper'>
        <h3 style={{color:'#ffb703',textTransform:'uppercase',marginBottom:20}}>Our projects</h3>
        <h2 style={{fontSize:56,fontWeight:800,marginBottom:20}}>Explore our diverse range of projects</h2>
        <p style={{fontSize:16,marginTop:10,color:'#667282',width:'60%',textAlign:'center'}}>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
        <div className='projects' style={{marginTop:30}}>
        <div className='project' style={{backgroundImage:'url("/images/our-project-1-1.jpg")'}}>
        <div className="overlay">
          <div className='project-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Aspen Heights</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='project-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
          
        </div>
        <div className='project' style={{backgroundImage:'url("/images/our-project-3.jpg")'}}>
        <div className="overlay">
           <div className='project-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Forest Hill Towers</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='project-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
         
        </div>
        <div className='project' style={{backgroundImage:'url("/images/church-ceiling.jpg")'}}>
        <div className="overlay">
          <div className='project-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Church Ceiling</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='project-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
          
        </div>
        <div className='project' style={{backgroundImage:'url("/images/our-project-4.jpg")'}}>
        <div className="overlay">
          <div className='project-content'>
            <h3 style={{fontSize:24,fontWeight:700,marginBottom:20,color:'white'}}>Parkview Plaza</h3>
            <p style={{color:'white'}}>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
             <div className='project-cta' style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
               <h4 style={{color:'#ffb703',fontWeight:700,marginTop:10,marginRight:10}}>View More</h4>
               <FontAwesomeIcon icon={faCircleArrowRight} color='#ffb703' style={{marginTop:12}}/>
             </div>
          </div>
        </div>
          
        </div>
        </div>

        <div className='btn' style={{marginTop:50,backgroundColor:'#ffb703',padding:'20px 30px',borderRadius:15,cursor:'pointer'}}>
          <div className='btn-wrapper' style={{display:'flex'}}>
              <h3 style={{color:'white'}}>View All Projects</h3>
              <FontAwesomeIcon icon={faCircleArrowRight} color='white' style={{marginTop:5,marginLeft:10}}/>
          </div>
        </div>
     </div>

    </div>
  )
}

export default Projects
