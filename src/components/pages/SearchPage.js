import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputForm from '../input/InputForm';
import parseISO from 'date-fns/parseISO';
import { addToken, refreashToken } from '../../actions/appActions';
import './SearchPage.css';

const SearchPage = () => {
  const dispatch = useDispatch();

  const params = new URLSearchParams(document.location.search.substring(1));
  const auth = params.get('access_token');
  if (auth) {
    dispatch(addToken(auth));
  }

  //Input of date-picker is Date(), output is String.
  //If we want to re-populate form with past data, we need to parse it.
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    formData.date[0] = parseISO(formData.date[0]);
    formData.date[1] = parseISO(formData.date[1]);
  }

  const history = useHistory();

  const clickHandler = (values) => {
    //TODO: Error handling for bad ticketmaster request:
    console.log('Search click-handler:');
    localStorage.setItem('formData', JSON.stringify(values));
    dispatch(refreashToken());
    // history.push('/playback');
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
