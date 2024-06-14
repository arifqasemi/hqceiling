import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className='contact-content'>
      <div className='contact-detail'>
        <div className='' style={{backgroundColor:'red',width:'15%',height:'20%',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
        <FontAwesomeIcon icon={faLocationDot} style={{color:'white'}}/>
        </div>
        <p>175 24th Street, OT- 35 Melbourn, EA 265, Australia.</p>
      </div>
      <div className='contact-detail'>
        <div className='' style={{backgroundColor:'red',width:'15%',height:'20%',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
        <FontAwesomeIcon icon={faEnvelope} style={{color:'white'}}/>
        </div>
        <p>hadi@hqceilings.com.au</p>
      </div>
      <div className='contact-detail'>
        <div className='' style={{backgroundColor:'red',width:'15%',height:'20%',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}>
        <FontAwesomeIcon icon={faPhone} style={{color:'white'}}/>
        </div>
        <p>+61 469 392 909</p>
      </div>
    </div>
  )
}

export default Contact
