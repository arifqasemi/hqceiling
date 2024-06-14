import React from 'react'
import Image from 'next/image'
import postImage from '../assets/images/post-image.jpg'
import './posts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
function Posts({title,description,image}) {
  return (
    <div className='post-container'>
      <Image src={postImage} width={100} height={100} alt='post-image' className='post-image'/>
      <p style={{paddingLeft:20,fontWeight:500,color:'#1e81b0',textAlign:'start',paddingRight:20,fontSize:20}}>{title}</p>
      <p style={{fontSize:12,paddingLeft:20,paddingRight:20,textAlign:'start'}}>{description}</p>
      <p style={{paddingLeft:20,textAlign:'start',fontWeight:500}}>Read More<FontAwesomeIcon icon={faAnglesRight} style={{fontSize:12,marginLeft:5}}/></p>
    </div>
  )
}

export default Posts
