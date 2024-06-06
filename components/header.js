import React from 'react'
import './header.css'
import Image from 'next/image'
import logo from '../assets/images/roof.png'

function Header() {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Image src={logo} height={50} width={50} alt='logo' className='image'/>
      </div>
 
      <div className='nav-links'>
      <li>Home</li>
      <li>Service</li>
      <li>About</li>
      <li>Contact</li>
      </div>
    </nav>
  )
}

export default Header
