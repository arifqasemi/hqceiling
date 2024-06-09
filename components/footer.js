import React from 'react'
import './footer.css'
import logo from '../assets/images/roof.png'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo' style={{flex:1,textAlign:'start'}}>
        <Image src={logo} width={100} height={100} alt='logo'/>
       <p style={{color:'#9ba2ad',textAlign:'start'}}>We provide the best legal services
       to deliver superior performance.</p>
      </div>
      <div className='footer-office' style={{flex:1,textAlign:'start',display:'flex',flexDirection:'column',gap:10}}>
        <h2 style={{color:'white',textAlign:'start'}}>Office</h2>
        <p style={{color:'#9ba2ad',textAlign:'start'}}>Corporate Office-
        175 24th Street, OT- 35 London, UK 265</p>
        <p style={{color:'white'}}>hadiqasemihqceiling.com</p>
        <p style={{color:'white'}}>+61253645634</p>
      </div>
      <div className='footer-links' style={{flex:1,textAlign:'start',display:'flex',flexDirection:'column',gap:20}}>
      <h2 style={{color:'white',textAlign:'start'}}>Links</h2>
      <Link href='#'><p style={{color:'#9ba2ad'}}>Home</p></Link>
      <Link href='#'><p style={{color:'#9ba2ad'}}>About</p></Link>
      <Link href='#'><p style={{color:'#9ba2ad'}}>Service</p></Link>
      <Link href='#'><p style={{color:'#9ba2ad'}}>Contact</p></Link>
      </div>
      <div className='footer-contact' style={{flex:1,textAlign:'start'}}>
      <h2 style={{color:'white',textAlign:'start'}}>Get In Touch</h2>
      </div>
    </div>
  )
}

export default Footer
