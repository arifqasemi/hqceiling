import React from 'react'
import './video-section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
function VideoSection() {
  return (
    <div className='video-section'>
      <div className='over-lay' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{backgroundColor:'white',height:50,width:50,borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
        <a href="https://www.youtube.com/watch?v=hvSq38FChGU" className="video-play-btn mfp-iframe"><FontAwesomeIcon icon={faPlay} color='red'/></a> 
        </div>
      
      </div>
    </div>
  )
}

export default VideoSection
