import React from 'react';
import { useHistory } from 'react-router-dom';
import InputForm from '../../components/input/InputForm';
import NewInputForm from '../input/NewInputForm';
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
      {/* <InputForm callback={clickHandler} /> */}
      <NewInputForm />
    </div>
  );
};

export default SearchPage;
