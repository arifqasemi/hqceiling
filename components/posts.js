import React from 'react'
import Image from 'next/image'
import postImage from '../assets/images/post-image.jpg'
import './posts.css'
function Posts() {
  return (
    <div className='post-container'>
      <Image src={postImage} width={100} height={100} alt='post-image' className='post-image'/>
      <p style={{paddingLeft:20,textTransform:'uppercase'}}>Installation</p>
      <h4 style={{fontSize:24,fontWeight:500,textTransform:'capitalize',paddingLeft:20}}>what are all the different roof tiles?</h4>
      <p style={{paddingLeft:20,}}>November 20 2024   1 Comment</p>
    </div>
  )
}

export default Posts
