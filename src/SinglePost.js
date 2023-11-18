import React from 'react'
import thumbup from './images/thumb-up.png';
import './style.css';
function SinglePost({title,description, creator, time}) {
  return (
    <div className='single-post'>
    <div className='post-header'>
    <div className='post-title'><h1>{title}</h1></div>
    <div className='post-icon'><img alt="thumbup" src={thumbup}/></div>
    </div>
    <div className='post-desc'>{description}</div>
    <div className='post-footer'>
    <div className='post-creator'>{creator}</div>
    <div className='post-time'>{time}</div>
    </div>
    </div>
  )
}

export default SinglePost;