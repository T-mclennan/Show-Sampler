import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='Home'>
      <div className='lander'>
        <h1>Show Sampler</h1>
        <p>Listen to the music of upcoming concerts</p>

        <button
          onClick={() => (window.location = 'http://localhost:8888/login')}
          style={{ marginTop: '2rem', borderRadius: '1em' }}
        >
          Sign In!
        </button>
      </div>
    </div>
  );
}
