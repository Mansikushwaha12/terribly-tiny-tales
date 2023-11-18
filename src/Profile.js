import React from 'react';
import backimg from './images/back-img.jpg';
import anujImg from './images/anuj_gosaliya.jpeg';
import star from './images/star.png';
import eye from './images/eye.png';
import thumbup from './images/thumb-up.png';
import like from './images/like.png';

const Profile = () => {
  return (
    <div className="profile">
    <div className='profile-back'>    
      <img src={backimg} alt='background-img'/>
    </div>
      <div className='profile-img'>
      <div><img src={anujImg} alt="Profile Pic" className='imgdiv'/></div>
      <div className='about'>
      <div className='about-top'><h1>Anuj Gosaliya</h1></div>
      <div className='about-bottom'>
      <div className='followers'>
      <div><p>6482</p> <h4>Followers</h4></div>

      <div><p>245</p><h4>Following</h4></div>
      </div>
      </div>
   
      </div>
      </div>
      <div className='experience'>
      <h3>Co-founder & CEO at Terribly Tiny Tales</h3>
      <p>http://www.instagram.com/anujgosalia</p>
      <div className='likes'>
        <div className='star icons'><img alt="star" src={star}/><p>125</p></div>
        <div className='thumb icons'><img alt="thumbup"src={thumbup}/><p>12</p></div>
        <div className='view icons'><img alt="eye" src={eye}/><p>57.8K</p></div>
        <div className='comment icons'><img alt="like" src={like}/><p>26.5K</p></div>
      </div>
      </div>
      
    </div>
  );
};

export default Profile;


