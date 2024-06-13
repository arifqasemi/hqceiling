import React from 'react'
import './homeTab.css'
import Image from 'next/image'
import TabImage from '../../assets/images/Renovate-Service.jpg'
function RenovationTab() {
  return (
    <div className='home-tab'>
    <div className='home-tab-image'>
     <Image src={TabImage} alt='tab-image' layout='responsive' width={1920} height={1080} quality={100} className='tab-image'/>
    </div>
    <div className='home-tab-text'>
      <h2 style={{marginBottom:20,color:'white',fontSize:24}}>Renovation</h2>
     <p style={{fontSize:14,lineHeight:1.3,color:'white',lineHeight:2,}}>Although we as a city are ageing gracefully, sometimes we need to bring our homes into the current century or create that extra space to ease growing pains. Applying our intelligent design and quality construction principles to your existing home, let us show you what is possible to achieve. With our complimentary initial site inspection, one of our friendly team members can answer your questions and outline your renovation options. With 3D modelling, we can rework your existing home, identify design flaws and develop a clear plan to help you move forward with your renovation requirements.</p>
    </div>
  </div>
  )
}

export default RenovationTab
