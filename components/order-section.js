import React from 'react'
import  './order-section.css'
import Prograss from './prograss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function OrderSection() {
  return (
    <div className='order-section'>
      <p  className='order-sub-heading' style={{fontWeight:500}}>ALWAYS HERE FOR YOU.</p>
        <h2 className='order-heading'>Why Choose Us?</h2>
        <p style={{textAlign:'center',lineHeight:2,paddingLeft:10,paddingRight:10}}>Throughout the building process, there are numerous decisions, stresses, choices, questions, problems, and queries that arise. From colors, to products, to energy efficiency and bushfire conditions to complex engineering challenges and architectural features, you need a partner in your project, not just a builder. The team at IQ Constructions are dedicated to assisting our clients in sharing our knowledge, providing alternative opinions and giving guidance where necessary. </p>
      </div>
  )
}

export default OrderSection
