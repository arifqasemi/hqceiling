import React from 'react'
import './hero-section.css'
import Header from '../components/header'
export default function HomeHeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-wrapper'>
        <div style={{backgroundColor:'#00000052',width:'100%',height:'100vh'}}>
        <div className='navbar'>
        <Header></Header>
        </div>
        <div style={{marginTop:30,display:'flex',alignItems:'center',paddingTop:100,height:'100%',flexDirection:'column'}}>
            <h2 style={{color:'#ffb703',fontSize:16}}>Welcome to HQ Ceilings</h2>
            <h1 style={{fontSize:70,color:'white',textAlign:'center'}}>Building dreams with<br/>
            precision and excellence</h1>
            <p style={{width:'80%',color:'white',textAlign:'center',fontSize:22,marginTop:10}}>we specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail. With years of experience and a commitment to quality.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
