import React from 'react';
import './Home.css';

export default function Home() {
  const clickHandler = () => {
    // SEARCH TICKETMASTER:
    // POPULATE DATA

    // IF NO TOKEN:
    // window.location = 'http://localhost:3000/search';
    window.location = 'http://localhost:8888/login';

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
}
