import React from 'react'
import './team-section.css'
import Image from 'next/image'
import image1 from '../assets/images/1-1.jpg'
import image2 from '../assets/images/1-2.jpg'
import image3 from '../assets/images/1-3.jpg'
import image4 from '../assets/images/1-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function TeamSection() {
  return (
    <div className='team-section'>
        <div className='team-container'>
            <div className='image-team' style={{ backgroundImage: `url(${image1.src})` }}>
              <div className='team-overly'>
                <div>
                   <h3 style={{color:'white'}}>John Leiviw</h3>
                <h3 style={{color:'white',textAlign:'center'}}>Operator</h3>
                </div>
                <div className='team-contact' style={{display:'flex',gap:10,}}>
                <FontAwesomeIcon icon={faLinkedin} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faInstagram} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faFacebookF} style={{color:'white'}}/>
                </div>
              </div>

            </div>
            <div className='image-team' style={{ backgroundImage: `url(${image2.src})` }}>
              <div className='team-overly'>
                <div>
                   <h3 style={{color:'white'}}>John Leiviw</h3>
                <h3 style={{color:'white',textAlign:'center'}}>Operator</h3>
                </div>
                <div className='team-contact' style={{display:'flex',gap:10,}}>
                <FontAwesomeIcon icon={faLinkedin} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faInstagram} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faFacebookF} style={{color:'white'}}/>
                </div>
              </div>

            </div>
            <div className='image-team' style={{ backgroundImage: `url(${image3.src})` }}>
              <div className='team-overly'>
                <div>
                   <h3 style={{color:'white'}}>John Leiviw</h3>
                <h3 style={{color:'white',textAlign:'center'}}>Operator</h3>
                </div>
                <div className='team-contact' style={{display:'flex',gap:10,}}>
                <FontAwesomeIcon icon={faLinkedin} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faInstagram} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faFacebookF} style={{color:'white'}}/>
                </div>
              </div>

            </div>
            <div className='image-team' style={{ backgroundImage: `url(${image4.src})` }}>
              <div className='team-overly'>
                <div>
                   <h3 style={{color:'white'}}>John Leiviw</h3>
                <h3 style={{color:'white',textAlign:'center'}}>Operator</h3>
                </div>
                <div className='team-contact' style={{display:'flex',gap:10,}}>
                <FontAwesomeIcon icon={faLinkedin} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faInstagram} style={{color:'white'}}/>
                <FontAwesomeIcon icon={faFacebookF} style={{color:'white'}}/>
                </div>
              </div>

            </div>
        </div>
        <div className='team-content-container'>
        <p style={{color:'#797c7f',color:'#797c7f'}}>Our Team</p>
        <h3 className='team-heading'>Meet Our talent &
        Professional Team</h3>
        <p style={{color:'#797c7f'}}>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <button className='team-button'>Learn More</button>
        </div>
    </div>
  )
}

export default TeamSection
