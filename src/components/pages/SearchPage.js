import React from 'react';
import './SearchPage.css';
import { useFormik } from 'formik';

const SearchPage = () => {
  const formik = useFormik({});

  const clickHandler = () => {
    //TODO: Error handling for bad login credentials
    window.location = 'http://localhost:8888/login';
  };

  return (
    <div className='Search-container'>
      <h1>Search Page</h1>
      <p>search form here</p>
      {/* <form>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' name='city' /> */}
      <button
        onClick={clickHandler}
        style={{
          marginTop: '2rem',
          borderRadius: '1em',
        }}
      >
        Generate Playlist!
      </button>
      {/* </form> */}
    </div>
  );
};

export default SearchPage;
