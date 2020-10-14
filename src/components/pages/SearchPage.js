import React from 'react';
import { useHistory } from 'react-router-dom';
import InputForm from '../input/InputForm';
import './SearchPage.css';

const SearchPage = () => {
  const history = useHistory();

  const clickHandler = () => {
    //TODO: Error handling for bad login credentials
    history.push('/playback');
  };

  return (
    <div className='Search-container'>
      {/* <h3>Generate Playlist:</h3> */}
      {/* <OldInputForm callback={clickHandler} /> */}
      <InputForm callback={clickHandler} />
    </div>
  );
};

export default SearchPage;
