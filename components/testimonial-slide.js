import React from 'react'

import './testimonial-section.css'

function TestimonialSlide() {
  return (
      <div  className='testimonial-container'>
        <div  className='testimonial' >
          <p style={{textTransform:'uppercase',color:'#bda588',fontWeight:500}}>testimonial</p>
           <h2 className='testimonial-heading'>Appreciated there honesty and integrity</h2>
          <p style={{fontSize:16,color:'white'}}>"We would recommend HQ Ceiling to everyone. They have built our dream home on time and on budget. From the very beginning Dave understood what we were after and somehow got this amazing home in our budget. Daniel our awesome supervisor has the best eye for detail and every single person we have met on site has been delightful. They have included our whole family and made the whole process fun and enjoyable, making our kids feel a part of this build. Excellent company, outstanding work and lovely people. Highly recommended!"</p>
          <div style={{display:'flex',gap:10,}}>
          {/* <Image src={workerOne} width={50} height={50} alt='service' style={{height:66,width:66,borderRadius:'50%'}}/> */}
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%'}}>
             <div style={{height:3,width:'40%',backgroundColor:'gray',marginBottom:7}}></div>
             <p style={{color:'white'}}>Joe Robert</p> 
          </div>
         
          </div>      
          </div>
      </div>
  )
}

export default TestimonialSlide
