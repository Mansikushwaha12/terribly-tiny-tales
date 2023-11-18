import React from 'react';
import logo2 from './images/logo2.jpeg';
import './style.css';
const Header = () => {
  return (
    <div className='header'>
        <div className='left-header'>
            <div className='logo'>
               <img src={logo2} alt='logo'/>

            </div>
            <div className='header-text'>
                <p>STORIES</p>
            </div>
        </div>
      
      <div className='right-header'>
      <button >
            Courses
        </button>
      </div>
    </div>
  );
};

export default Header;