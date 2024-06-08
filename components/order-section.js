import React from 'react'
import  './order-section.css'
import Prograss from './prograss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function OrderSection() {
  return (
    <div className='order-section'>
      <p style={{textTransform:'uppercase',marginBottom:30}}>Custom Order</p>
      <h3 style={{fontSize:38,fontWeight:700,marginTop:10,marginBottom:30}}>We Are Committed <br/>to Best Service</h3>
      <div className='order-content'>
  
        <div style={{maxWidth:'40%',}}>
         <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna aliqua.</p>
         <div style={{display:'flex',marginTop:20,gap:5}}>
          <FontAwesomeIcon icon={faEnvelope} size={29} style={{marginTop:2,cursor:'pointer'}}/>
          <p style={{cursor:'pointer'}}>hadiqasemi@hqceiling.com</p>
         </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',width:'50%',gap:30}}>
            <Prograss title='Felt Ceiling' percentage={70}/>
            <Prograss title='Ceiling Repair' percentage={80}/>
            <Prograss title='Ceiling Renovation' percentage={90}/>
        </div>
        
     
      </div>
      </div>
  )
}

export default OrderSection
