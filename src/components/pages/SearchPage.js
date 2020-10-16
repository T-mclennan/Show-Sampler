import React from 'react';
import { useHistory } from 'react-router-dom';
import InputForm from '../input/InputForm';
import parseISO from 'date-fns/parseISO';
import './SearchPage.css';

const SearchPage = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));

  //Input of date-picker is Date(), output is String.
  //If we want to re-populate form with past data, we need to parse it.
  if (formData) {
    formData.date[0] = parseISO(formData.date[0]);
    formData.date[1] = parseISO(formData.date[1]);
  }

  const history = useHistory();

  const clickHandler = (values) => {
    //TODO: Error handling for bad login credentials
    console.log(values);
    localStorage.setItem('formData', JSON.stringify(values));
    history.push('/playback');
  };

  return (
    <div className='Search-container'>
      {/* <h3>Generate Playlist:</h3> */}
      {/* <OldInputForm callback={clickHandler} /> */}
      <InputForm callback={clickHandler} savedValues={formData} />
    </div>
  );
};

export default SearchPage;
