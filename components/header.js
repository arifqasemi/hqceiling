import React from 'react'
import './header.css'
import Image from 'next/image'
import logo from '../assets/images/roof.png'
import Link from 'next/link'

function Header() {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Image src={logo} height={50} width={50} alt='logo' className='image'/>
      </div>
 
      <div className='nav-links'>
      <Link href='/home' className='link border'>Home</Link>
      <Link href='/service'>Service</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Header
