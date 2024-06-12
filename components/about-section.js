'use client'
import './about-section.css'
import Statistic from './statistic'
import Image from 'next/image'
import img1 from '../assets/images/about-1-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link'

const slideInVariants = {
  hidden: { opacity: 0, y:100 },
  visible: { opacity: 1,y:0, transition: { duration: 0.5 } },
};
function AboutSection() {
  return (
    <div className='about-section' >
        <Statistic/>
       <div className='content'>
         <motion.div className='image-container' initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
            <div className='about-section-image' style={{width:'100%'}}>
                <Image src={img1} width={100} height={100} alt='image' className='about-image'/>
            </div>
            <div style={{display:'flex',alignItems:'flex-end',position:'relative',top:30,left:'-70px',width:'100%'}}>
                <Image src={img1} width={100} height={100} alt='image' className='about-image-two'/>
            </div>
         </motion.div>
         <motion.div className='about-text' initial="hidden" whileInView="visible" variants={slideInVariants} viewport={{ once: true }}>
            <p style={{marginBottom:20,color:'#797c7f'}}>About Us</p>
            <h1 style={{fontSize:40,marginBottom:20}}>We make high quality
            <br/>roofing for your homes</h1>
            <p style={{color:'#797c7f'}}>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum facilisis thr sem. Imperdiet massa turpis sit Lorem ipsum dolor sit amet</p>
             <div style={{display:'flex',marginTop:20,flexWrap:'wrap',justifyContent:'space-between'}}>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px',color:'#fe574f' }} />         
                 <p>Professional Worker</p>
               </div>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px',color:'#fe574f' }} />         
                 <p>Trusted Company</p>
               </div>
             
             </div>
             <div style={{display:'flex',marginTop:20,flexWrap:'wrap',justifyContent:'space-between'}}>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px',color:'#fe574f' }} />         
                 <p>Best Quality Materials</p>
               </div>
               <div style={{display:'flex'}}>
                  <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: '16px', marginRight: '10px',color:'#fe574f' }} />         
                 <p>Affordable Price</p>
               </div>
             </div>
             <div style={{marginTop:39}}>
              <Link href='/about' style={{backgroundColor:'#fe574f',border:'none',cursor:'pointer',color:'white',textTransform:'uppercase',fontSize:15,fontWeight:700,padding:15,}}>Learn More</Link>
             </div>
         </motion.div>
       </div>
    </div>
  )
}

export default AboutSection
