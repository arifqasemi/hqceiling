import React from 'react'
import './homeTab.css'
import Image from 'next/image'
import TabImage from '../../assets/images/Homes-Service.jpg'

function HomeTab() {
  return (
    <div className='home-tab'>
      <div className='home-tab-image'>
      <Image src={TabImage} alt='tab-image' layout='responsive' width={1920} height={1080} quality={100} className='tab-image' />      </div>
      <div className='home-tab-text'>
        <h2 style={{marginBottom:20,color:'white',fontSize:24,}}>Home Builders</h2>
       <p style={{fontSize:14,lineHeight:1.3,color:'white',lineHeight:2,paddingRight:10}}>Uniquely combining construction methods and materials, IQ Construction has established a reputation for delivering noteworthy custom homes in the West Australian market. Tailoring each home to our client requirements, site conditions and energy efficiency modelling, let our intelligent design team assist you in developing the square meters of your land to reach its maximum living yield. Explore your home before construction commences through our 3D modelling capabilities and identify those quality-of-life challenges with foresight.</p>
      </div>
    </div>
  )
}

export default HomeTab
