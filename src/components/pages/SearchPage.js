import React from 'react';

export default function SearchPage() {
  const clickHandler = () => {
    // SEARCH TICKETMASTER:
    // POPULATE DATA

    // IF NO TOKEN:
    window.location = 'http://localhost:8888/login';

    // THEN RETURN HERE
    // IF LOGIN FAILS DISPLAY LOGIN ERROR

    // ELSE
    // ROUTE TO PLAYBACK
  };

  return (
    <div className='Search-container'>
      <h1>Show Sampler</h1>
      <p>Listen to the music of upcoming concerts</p>

      <button
        onClick={clickHandler}
        style={{
          marginTop: '2rem',
          borderRadius: '1em',
          padding: '1em 5em 5em 1em',
        }}
      >
        Generate Playlist!
      </button>
    </div>
  );
}
