'use client'
import './about-section.css'
import Image from 'next/image'
import aboutImage from '../assets/images/about-us-img.png'


function AboutSection() {
  return (
    <div className='about-section' style={{backgroundColor:'white'}}>
       <div className='about-section-wrapper'>
            <div className='about-image'>
              <div className='image-wrapper' style={{width:'70%',paddingLeft:'20px'}}>
                <Image src={aboutImage} alt="logo" width={800} height={500} className="image" style={{ objectFit: 'cover', width: '100%' }} />
              </div>
            </div>
            <div className='about-content'>
             <h3 style={{fontSize:'16px',fontWeight:700,color:'#ffb703',textTransform:'uppercase',marginBottom:8}}>About Us</h3>
             <h2 style={{fontSize:56}}>Crafting structures
             that last a lifetime</h2>
             <p style={{fontSize:'18px',color:'#667282',marginTop:10,lineHeight:'1.6em'}}>Crafting structures that last a lifetime requires a holistic approach that integrates advanced materials, resilient design, regular maintenance, and sustainability practices. By learning from historical examples and leveraging modern technology.</p>
            </div>
       </div>

    </div>
  )
}

export default AboutSection
