'use client'
import React from 'react'
import { motion } from 'framer-motion';
const slideInVariants = {
  hidden: { opacity: 0, y:100 },
  visible: { opacity: 1,y:0, transition: { duration: 0.5 } },
};
function Statistic() {
  return (
    <motion.div className='statistic' initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
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
  </motion.div>
  )
}

export default Statistic
