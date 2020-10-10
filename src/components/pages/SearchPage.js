import React from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const clickHandler = () => {
    //TODO: Error handling for bad login credentials
    window.location = 'http://localhost:8888/login';
  };

  return (
    <div className='Search-container'>
      <h1>Search Page</h1>
      <p>search form here</p>

      <button
        onClick={clickHandler}
        style={{
          marginTop: '2rem',
          borderRadius: '1em',
        }}
      >
        Generate Playlist!
      </button>
    </div>
  );
};

export default SearchPage;
