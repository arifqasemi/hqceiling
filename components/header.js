'use client'
import './header.css'
import Image from 'next/image'
import logo from '../assets/images/roof.png'
import Link from 'next/link'
import { usePathname} from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu'
import { useState } from 'react';

function Header() {
  const [openModel,setOpenModel] = useState(true)
  const pathname = usePathname()

  const MenuHandler = ()=>{
      setOpenModel((preState)=> !preState)

  }
  return (
    <>
         <nav className='navbar'>
      <div className='nav-logo'>
        <Image src={logo} height={50} width={50} alt='logo' className='image'/>
      </div>
 
      <div className='nav-links'>
        <div>
           <Link href='/home' className='link' style={{fontSize:16,fontWeight:600}}>Home</Link>
           {pathname ==='/home'? <div className='border'></div> :''}
        </div>
        <div>
           <Link href='/service' className='link' style={{fontSize:16,fontWeight:600}}>Service</Link>
           {pathname ==='/service'? <div className='border'></div> :''}
        </div>
        <div>
           <Link href='/about' className='link' style={{fontSize:16,fontWeight:600}}>About</Link>
           {pathname ==='/about'? <div className='border'></div> :''}
        </div>
        <div>
           <Link href='/contact' className='link' style={{fontSize:16,fontWeight:600}}>Contact</Link>
           {pathname ==='/contact'? <div className='border'></div> :''}
        </div>

      </div>
      <div className='nav-mobile' >
      <FontAwesomeIcon icon={faBars}  onClick={MenuHandler} style={{cursor:'pointer'}}/>

      </div>
    </nav>         
    {openModel && <Menu onClick={MenuHandler}/>}

    </>

  )
}

export default Header
