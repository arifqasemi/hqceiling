import React from 'react'
import './footer.css'
import logo from '../assets/images/roof.png'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-office' style={{flex:1,textAlign:'start',display:'flex',flexDirection:'column',gap:10}}>
        <h2 style={{color:'white',textAlign:'start'}}>Get In Touch</h2>
        <p style={{color:'white',textAlign:'start'}}>Corporate Office-
        175 24th Street, OT- 35 London, UK 265</p>
        <a href='mailto:hadiqasemi@hqceiling.com' style={{color:'white'}}>hadiqasemihqceiling.com</a>
        <p style={{color:'white'}}>+61253645634</p>
      </div>
      <div className='footer-links' style={{flex:1,textAlign:'start',display:'flex',flexDirection:'column',gap:20}}>
      <h2 style={{color:'white',textAlign:'start'}}>Quick Links</h2>
      <Link href='#'><p style={{color:'white'}}>Home</p></Link>
      <Link href='#'><p style={{color:'white'}}>About</p></Link>
      <Link href='#'><p style={{color:'white'}}>Service</p></Link>
      <Link href='#'><p style={{color:'white'}}>Contact</p></Link>
      </div>

    </div>
  )
}

export default Footer
