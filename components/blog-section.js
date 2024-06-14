'use client'
import React from 'react'
import './blog-section.css'
import Post from './posts'
import AllPosts from '../assets/data/posts'

function BlogSection() {
  return (
    <div className='blog-container'>
      <p style={{marginBottom:20,color:'gray',fontWeight:500}}>News & Updates</p>
      <h2 style={{fontSize:45,color:'#1e81b0'}}>Recent News
      </h2>
      <div className='post-wrapper'>
        {AllPosts.map((post)=>(<Post title={post.title} description={post.description} image={post.image}/>))}
         {/* <Post/>
        <Post/>
        <Post/> */}
      </div>
       
    </div>
  )
}

export default BlogSection
