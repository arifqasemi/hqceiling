import React from 'react'
import './homeTab.css'
import Image from 'next/image'
import TabImage from '../../assets/images/Services-Commercial.jpg'
function CommercialTab() {
  return (
    <div className='home-tab'>
      <div className='home-tab-image'>
       <Image src={TabImage} alt='tab-image' layout='responsive' width={1920} height={1080} quality={100} className='tab-image'/>
      </div>
      <div className='home-tab-text'>
        <h2 style={{marginBottom:20,color:'white',fontSize:24}}>Commercial</h2>
       <p style={{fontSize:14,lineHeight:1.3,color:'white',lineHeight:2,}}>IQ Construction has successfully established itself in the private commercial construction space by providing intelligent design and quality construction services in the childcare, aged care, social, religious and education sectors. With a fresh approach to the use of different construction methods and products, we can provide alternative solutions to commercial developments.</p>
      </div>
    </div>
  )
}

export default CommercialTab
