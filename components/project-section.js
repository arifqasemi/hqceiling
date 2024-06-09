import Image from 'next/image'
import React from 'react'
import './project-section.css'

function ProjectSection() {
  return (
    <div className='project-section'>
        <div className='heading' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:10}}>
            <p style={{fontSize:14,color:'#797c7f'}}>RECENT PROJECTS</p>
            <h3 style={{fontSize:38,fontWeight:700,marginTop:10}}>We Provide you the<br/> Highest Quality Work</h3>
        </div>

        <div className='projects'>
            <div className='project'>
                <div className='project-title'>
                    <h4>Ceiling Installation</h4>
                </div>
            </div>


            <div className='project'>
                <div className='project-title'>
                    <h4>Ceiling Repair</h4>
                </div>
            </div>


            <div className='project'>
                <div className='project-title'>
                    <h4>Ceiling Inspection</h4>
                </div>
            </div>

            <div className='project'>
                <div className='project-title'>
                    <h4>Ceiling Renovation</h4>
                </div>
            </div>

            <div className='project'>
                <div className='project-title'>
                    <h4>Ceiling Maintenance</h4>
                </div>
            </div>

            <div className='project'>
                <div className='project-title'>
                    <h4>Ceiling Replacement</h4>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectSection
