import React from 'react'
import './work-togather.css'
import Image from 'next/image'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function WorkTogather() {
  return (
    <div className='work-togather-section'>
        <div className='work-togather-section-wrapper'>
          <div className='work-togather-content' style={{height:400,width:'60%'}}>
              <h3 style={{color:'white',fontSize:56}}>Let's bulid something great
              together!</h3>
              <p style={{color:'white',fontSize:18,marginTop:20,fontFamily:'DM Sans, Sans-serif',lineHeight:'1.6em'}}>Don’t wait any longer to bring your construction dreams to life. Partner with Builtup and experience unparalleled service and quality.</p>
            <div className='btn' style={{marginTop:50,backgroundColor:'#ffb703',padding:'20px 30px',borderRadius:15,cursor:'pointer',width:'35%'}}>
            <div className='btn-wrapper' style={{display:'flex'}}>
                <h3 style={{color:'white'}}>View All Projects</h3>
                <FontAwesomeIcon icon={faCircleArrowRight} color='white' style={{marginTop:5,marginLeft:10}}/>
            </div>
            </div>
          </div>
          <div className='work-togather-image' style={{width:'40%'}}>
          <Image 
                src="/images/cta-box-img.png" 
                alt="logo" 
                width={800} 
                height={500} 
                className="image" 
                style={{maxWidth: '100%'}} 
              />
          </div>
          </div>
      
    </div>
  )
}
