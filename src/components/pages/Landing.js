import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './Landing.css';

const Landing = () => {
  const history = useHistory();
  // IF NOT logged in, route to login page

  const clickHandler = () => {
    // SEARCH TICKETMASTER:
    // POPULATE DATA

    // IF NO TOKEN:
    // window.location = 'http://localhost:3000/search';

    history.push('/search');

    // THEN RETURN HERE
    // IF LOGIN FAILS DISPLAY LOGIN ERROR

    // ELSE
    // ROUTE TO PLAYBACK
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
