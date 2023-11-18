import React from 'react';
import Header from './Header';
import Profile from './Profile';
import './style.css';
import Posts from './Posts';
import PostsTop from './PostsTop';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Profile/>
      <PostsTop/>
      <Posts/>
    </div>
  );
};

export default App;