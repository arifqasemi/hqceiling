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

import Image from 'next/image';

function ServiceSection() {
  return (
    <div style={{height:'auto',paddingTop:40,paddingLeft:50,display:'flex',flexDirection:'column',gap:80,paddingBottom:20}}>
        <div style={{flex:1}}>
        <p style={{textTransform:'capitalize'}}>services </p>
      <h1 style={{fontWeight:700,fontSize:40,marginTop:20}}>We can handle all types<br/>
      of ceiling services</h1>
        </div>
    
      <div style={{flex:3}} className='service-container'>
        <div  className='service'>
           <div className='flag'>
             <Image src={serviceImage} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Instalation</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <Image src={serviceImageOne} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Repair</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <Image src={serviceImageTwo} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Inspection</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <Image src={serviceImageThree} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Renovation</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <Image src={serviceImageFour} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Maintenance</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <Image src={serviceImageFive} width={50} height={50} alt='service'/>
           </div>
          <h3 style={{fontSize:25,fontWeight:500}}>Ceiling Replacement</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
      </div>
    </div>
  )
}

export default ServiceSection
