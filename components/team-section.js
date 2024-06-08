import React from 'react'
import './team-section.css'
import Image from 'next/image'
import image1 from '../assets/images/1-1.jpg'
import image2 from '../assets/images/1-2.jpg'
import image3 from '../assets/images/1-3.jpg'
import image4 from '../assets/images/1-4.jpg'

function TeamSection() {
  return (
    <div className='team-section'>
        <div className='team-container'>
            <div className='image-team' style={{ backgroundImage: `url(${image1.src})` }}>

            </div>
            <div className='image-team' style={{ backgroundImage: `url(${image1.src})` }}>

            </div>
            <div className='image-team' style={{ backgroundImage: `url(${image1.src})` }}>

            </div>
            <div className='image-team' style={{ backgroundImage: `url(${image1.src})` }}>

            </div>
        </div>
        <div className='team-content-container'>
        <p style={{color:'#797c7f'}}>Our Team</p>
        <h3 style={{fontSize:45,color:'white'}}>Meet Our talent &
        Professional Roofers</h3>
        <p style={{color:'#797c7f'}}>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <button style={{height:40,width:'20%',backgroundColor:'red',border:'none',fontWeight:600,color:'white',textTransform:'uppercase'}}>Learn More</button>
        </div>
    </div>
  )
}

export default TeamSection
