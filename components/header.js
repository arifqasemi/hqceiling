'use client'
import './header.css'
import Image from 'next/image'
import logo from '../assets/images/Group.svg'
import Link from 'next/link'
import { usePathname} from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu'
import { useState } from 'react';

function Header() {
  const [openModel,setOpenModel] = useState(false)
  const pathname = usePathname()

  const MenuHandler = ()=>{
    console.log('it should work')
      setOpenModel((preState)=> !preState)

  }
  return (
    <>
         <nav className='navbar'>
      <div className='nav-logo'>
        <Image src={logo} height={50} width={50} alt='logo' className='image' style={{height:70,width:100,marginTop:10}}/>
      </div>
 
      <div className='nav-links'>
        <div>
           <Link href='/' className='link' style={{fontSize:16,fontWeight:300}}>Home</Link>
           {pathname ==='/'? <div className='border'></div> :''}
        </div>
        <div>
           <Link href='/service' className='link' style={{fontSize:16,fontWeight:300}}>Service</Link>
           {pathname ==='/service'? <div className='border'></div> :''}
        </div>
        <div>
           <Link href='/about' className='link' style={{fontSize:16,fontWeight:300}}>About</Link>
           {pathname ==='/about'? <div className='border'></div> :''}
        </div>
        <div>
           <Link href='/contact' className='link' style={{fontSize:16,fontWeight:300}}>Contact</Link>
           {pathname ==='/contact'? <div className='border'></div> :''}
        </div>

      </div>
      <div className='nav-mobile' >
      <FontAwesomeIcon icon={faBars}  onClick={MenuHandler} style={{cursor:'pointer',fontSize:29,color:'white'}}/>

      </div>
    </nav>         
    {openModel && <Menu onClickHandler={MenuHandler}/>}

    </>

  )
}

export default Header
