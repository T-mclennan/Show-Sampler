import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavbarCustom from './components/NavbarCustom';
import { isTokenExpired, clearData } from './actions/appActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { expiration } = useSelector((state) => state.appReducer.auth_token);
  if (isTokenExpired(expiration)) {
    console.log('** token expired, clearing data **');
    dispatch(clearData());
  } else {
    console.log('** auth token in storage still valid **');
  }

  return (
    <div className='App-container'>
      <NavbarCustom />
      <Routes />
    </div>
  );
}

export default App;
