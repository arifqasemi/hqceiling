'use client'
import './prograss.css'
import { motion } from 'framer-motion';

function Prograss({title,percentage}) {
  return (
    <div style={{width:'100%'}}>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        <div style={{display:'flex',justifyContent:'space-between',width:'100%',}}>
            <h5 style={{fontSize:18,fontWeight:600}}>{title}</h5>
            <h3 style={{fontSize:18,fontWeight:600}}>{percentage}%</h3>
        </div>
        <div style={{height:4,width:'100%',backgroundColor:'white',}}>
            <motion.div style={{height:4,width: `${percentage}%`,backgroundColor:'#fe574f',}}  initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 6 }}></motion.div>
        </div>
      </div>
    </div>
  )
}

export default Prograss
