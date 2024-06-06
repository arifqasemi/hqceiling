import React from 'react'

function Statistic() {
  return (
    <div className='statistic'>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:5}}>
        <h4 style={{color:'white',fontSize:50}}>288 +</h4>
        <h3 style={{color:'white'}}>Projects Completed</h3>
    </div>
  
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:5}}>
        <h4 style={{color:'white',fontSize:50}}>90%</h4>
        <h3 style={{color:'white'}}>Client Statisfiction</h3>
    </div>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:5}}>
        <h4 style={{color:'white',fontSize:50}}>10 +</h4>
        <h3 style={{color:'white'}}>Years of Experience</h3>
    </div>
  </div>
  )
}

export default Statistic
