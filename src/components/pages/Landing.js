import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './Landing.css';

const Landing = () => {
  const clickHandler = () => {
    window.location = 'http://localhost:8888/login';
  };

  return (
    <div className='Home'>
      <div className='lander'>
        <h1>Show Sampler</h1>
        <p>Listen to the music of upcoming concerts</p>

        <button
          onClick={clickHandler}
          style={{ marginTop: '2rem', borderRadius: '1em' }}
        >
          Sign In!
        </button>
      </div>
    </div>
  );
};

export default Landing;
