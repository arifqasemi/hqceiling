'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import './service-section.css'

import { motion } from 'framer-motion';
import HomeTab from './tabs/homeTab'
import RenovationTab from './tabs/renovationTab'
import CommercialTab from './tabs/commercialTab'
import Image from 'next/image';

function ServiceSection() {
  const [homeTab,setHomeTab] = useState(true)
  const [renotionTab,setRenotionTab] = useState(false)
  const [commercialTab,setCommercialTab] = useState(false)

  const tabHandler =(tabName)=>{
    if(tabName ==="home"){
      setCommercialTab(false)
      setRenotionTab(false)
      setHomeTab(true)
    }
    if(tabName ==="renovation"){
      setCommercialTab(false)
      setHomeTab(false)
      setRenotionTab(true)
    }
    if(tabName ==="commercial"){
      setHomeTab(false)
      setRenotionTab(false)
      setCommercialTab(true)
    }
    // console.log(tabName)

  }

  return (
    <div className='service-section'>
      <div className='tabs'>
        <button className={homeTab ? 'tab-active' :'tab'} onClick={tabHandler.bind(this,'home')}>Home</button>
        <button className={renotionTab ? 'tab-active' :'tab'} onClick={tabHandler.bind(this,'renovation')}>Renovation</button>
        <button className={commercialTab ? 'tab-active' :'tab'} onClick={tabHandler.bind(this,'commercial')}>Ceilings</button>
      </div>
        {  homeTab && <div className='revnovation-tab'>
              <HomeTab/>
            </div>}
        { renotionTab &&  <div className='revnovation-tab'>
            <RenovationTab/>
            </div>}
        { commercialTab && <div className='commercial-tab'>
        <CommercialTab/>
          </div>}

    </div>
  )
}

export default ServiceSection
