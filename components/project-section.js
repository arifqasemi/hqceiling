import Image from 'next/image'
import React from 'react'
import './project-section.css'
import projectImage from '../assets/images/slide1.jpg'
import projectImage1 from '../assets/images/slide2.jpg'
import projectImage2 from '../assets/images/slide3.jpg'
import projectImage3 from '../assets/images/slide4.jpg'
import projectImage4 from '../assets/images/slide5.jpg'

function ProjectSection() {
  return (
    <div className='project-section'>
        <div className='heading' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:10}}>
            <p style={{fontSize:14,color:'#797c7f'}}>RECENT PROJECTS</p>
            <h3 className='project-heading'>We Provide you the<br/> Highest Quality Work</h3>
        </div>

        <div className='projects'>
            <div className='project' style={{backgroundImage:`url(${projectImage.src})`,transition: 'background-image 0.5s ease-in-out'}}>
                <div className='project-overlay' >
                      <div className='project-title'>
                    <h4 className='project-head'>Ceiling Installation</h4>
                    </div>
                    <div className='project-desc' style={{color:'#e8e8e8'}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
              
            </div>


            <div className='project' style={{backgroundImage:`url(${projectImage1.src})`}}>
            <div className='project-overlay' >
                      <div className='project-title'>
                    <h4 className='project-head'>Ceiling Repair</h4>
                    </div>
                    <div className='project-desc' style={{color:'#e8e8e8'}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>


            <div className='project' style={{backgroundImage:`url(${projectImage2.src})`}}>
            <div className='project-overlay' >
                      <div className='project-title'>
                    <h4 className='project-head'>Ceiling Replacement</h4>
                    </div>
                    <div className='project-desc' style={{color:'#e8e8e8'}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>

            <div className='project'style={{backgroundImage:`url(${projectImage3.src})`}}>
            <div className='project-overlay' >
                      <div className='project-title'>
                    <h4 className='project-head'>Ceiling Inspection</h4>
                    </div>
                    <div className='project-desc' style={{color:'#e8e8e8'}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>

            <div className='project' style={{backgroundImage:`url(${projectImage4.src})`}}>
            <div className='project-overlay' >
                      <div className='project-title'>
                    <h4 className='project-head'>Ceiling Installation</h4>
                    </div>
                    <div className='project-desc' style={{color:'#e8e8e8'}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>

            <div className='project' style={{backgroundImage:`url(${projectImage.src})`}}>
            <div className='project-overlay' >
                      <div className='project-title'>
                    <h4 className='project-head'>Ceiling Installation</h4>
                    </div>
                    <div className='project-desc' style={{color:'#e8e8e8'}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectSection
