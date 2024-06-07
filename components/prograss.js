import React from 'react'
import './prograss.css'


function Prograss({title,percentage}) {
  return (
    <div style={{width:'100%'}}>
      <div style={{display:'flex',flexDirection:'column',gap:5}}>
        <div style={{display:'flex',justifyContent:'space-between',width:'100%',}}>
            <h3>{title}</h3>
            <h3>{percentage}%</h3>
        </div>
        <div style={{height:5,width:'100%',backgroundColor:'gray',borderRadius:10}}>
            <div style={{height:5,width: `${percentage}%`,backgroundColor:'red',borderRadius:10}}></div>
        </div>
      </div>
    </div>
  )
}

export default Prograss
