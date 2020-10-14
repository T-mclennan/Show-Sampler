import React, { useState, useEffect } from 'react';
import Routes from './Routes';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavbarCustom from './components/NavbarCustom';
import { addTokens } from './actions/appActions';
import './App.css';

function App() {
  const params = new URLSearchParams(document.location.search.substring(1));
  const ref = params.get('r_token');
  const auth = params.get('access_token');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(addTokens({ auth, ref }));
  }, [dispatch]);

  if (ref) history.replace('/search');

  console.log('App');

  return (
    <div className='App-container'>
      <NavbarCustom />
      <Routes />
    </div>
  );
}

export default App;
