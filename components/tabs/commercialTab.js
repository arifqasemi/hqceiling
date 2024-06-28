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
        <h2 style={{marginBottom:20,color:'white',fontSize:24}}>Ceilings</h2>
       <p style={{fontSize:14,lineHeight:1.3,color:'white',lineHeight:2,}}>
        HQ Ceiling has successfully established itself in the private commercial construction space by providing intelligent design and quality construction services 
        </p>
         <div className='services'>
         <h3 style={{color:'white',marginBottom:5}}>Residential Ceilings</h3>
        <ul>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Drywall Ceilings</span>: Smooth, seamless surfaces perfect for any home.</li>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Drop Ceilings</span>: Functional and easy-to-maintain options for basements and other utility areas..</li>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Decorative Ceilings</span>: Custom designs including coffered, tray, and beam ceilings.</li>

        </ul>
         </div>
         <div className='services'>
         <h3 style={{color:'white',marginBottom:5}}>Commercial Ceilings</h3>
        <ul>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Suspended Ceilings</span>: Ideal for offices, retail stores, and commercial spaces.</li>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Acoustic Ceilings</span>:Improve sound quality and reduce noise with our specialized acoustic solutions.</li>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Metal Ceilings</span>: Durable and modern designs for high-traffic areas.</li>

        </ul>
         </div>

         <div className='services'>
         <h3 style={{color:'white',marginBottom:5}}>Industrial Ceilings</h3>
        <ul>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>High-Durability Ceilings</span>:Built to withstand the rigors of industrial environments.</li>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Insulated Ceilings</span>:Enhance energy efficiency and climate control.</li>
          <li style={{color:'white'}}><span style={{fontWeight:600}}>Fire-Resistant Ceilings</span>:  Ensure safety with our fire-rated ceiling systems.</li>

        </ul>
         </div>
      </div>
      
    </div>
  )
}

export default CommercialTab
