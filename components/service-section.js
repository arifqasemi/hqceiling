import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './service-section.css'
function ServiceSection() {
  return (
    <div style={{height:'auto',paddingTop:40,paddingLeft:50,display:'flex',flexDirection:'column',gap:80,paddingBottom:20}}>
        <div style={{flex:1}}>
        <p style={{textTransform:'capitalize'}}>services </p>
      <h1 style={{fontWeight:700,fontSize:40,marginTop:20}}>We can handle all types<br/>
      of roofing services</h1>
        </div>
    
      <div style={{flex:3}} className='service-container'>
        <div  className='service'>
           <div className='flag'>
             <h3>flag</h3>
           </div>
          <h3 style={{fontSize:25}}>Ceiling Instalation</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <h3>flag</h3>
           </div>
          <h3 style={{fontSize:25}}>Ceiling Instalation</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <h3>flag</h3>
           </div>
          <h3 style={{fontSize:25}}>Ceiling Instalation</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div style={{display:'flex',gap:10}}>
          <p style={{cursor:'pointer'}}>Read More</p>
          <FontAwesomeIcon icon={faArrowRightLong} style={{marginTop:2,cursor:'pointer'}}/>  
          </div>      
          </div>
          <div  className='service'>
           <div className='flag'>
             <h3>flag</h3>
           </div>
          <h3 style={{fontSize:25}}>Ceiling Instalation</h3>
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
