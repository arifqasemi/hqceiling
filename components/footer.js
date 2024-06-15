import React from 'react'
import './footer.css'
import logo from '../assets/images/roof.png'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-office' style={{flex:1,textAlign:'start',display:'flex',flexDirection:'column',gap:10,alignItems:'start'}}>
        <h2 style={{color:'white',textAlign:'start'}}>Get In Touch</h2>
        <div style={{display:'flex',gap:20}}>
        <Link href='https://www.facebook.com/hqceilings?mibextid=ZbWKwL'><FontAwesomeIcon icon={faFacebookF} style={{color:'white',cursor:'pointer'}}/></Link>
        <Link href='https://www.instagram.com/hqbuild_?igsh=MTcycHIzNGw1MnNlMw=='><FontAwesomeIcon icon={faInstagram} style={{color:'white',cursor:'pointer'}}/></Link>
        </div>
        <h4 style={{color:'white'}}>Adrress:</h4>
        <p style={{color:'white',textAlign:'start',paddingRight:5}}>Perth · Cannington, WA, Australia · Nedlands, WA, Australia · Armadale, WA, Australia · Gosnells, WA, Australia</p>
        <h4 style={{color:'white'}}>Email:</h4>
        <a href='mailto:hadi@hqceilings.com.au' style={{color:'white'}}>hadi@hqceilings.com.au</a>
        <h4 style={{color:'white'}}>Phone:</h4>
        <p style={{color:'white'}}>+61253645634</p>
      </div>
      <div className='footer-links' style={{flex:1,textAlign:'start',display:'flex',flexDirection:'column',gap:20}}>
      <h2 style={{color:'white',textAlign:'start'}}>Quick Links</h2>
      <Link href='/'><p style={{color:'white'}}>Home</p></Link>
      <Link href='/about'><p style={{color:'white'}}>About</p></Link>
      <Link href='/service'><p style={{color:'white'}}>Service</p></Link>
      <Link href='/contact'><p style={{color:'white'}}>Contact</p></Link>
      </div>

    </div>
  )
}

export default Footer
