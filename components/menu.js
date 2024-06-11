'use client'
import Link from 'next/link'
import { usePathname} from 'next/navigation'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Menu({onClick}) {
    // const [openModel,setOpenModel] = useState(false)
    const pathname = usePathname()

    // const onClick = ()=>{
    //     setOpenModel((preState)=> !preState)

    // }

  return (
    <>
         <div className='links-container'>
         <FontAwesomeIcon icon={faXmark}  style={{cursor:'pointer'}} onClick={onClick}/>
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
    </>
  )
}

export default Menu
