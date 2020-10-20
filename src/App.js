import React, { useState, useEffect } from 'react';
import Routes from './Routes';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavbarCustom from './components/NavbarCustom';
// import { addToken } from './actions/appActions';
import './App.css';

function App() {
  // const params = new URLSearchParams(document.location.search.substring(1));
  // const auth = params.get('access_token');
  // const dispatch = useDispatch();
  // const history = useHistory();

  // useEffect(() => {
  //   dispatch(addToken({ auth }));
  // }, [dispatch]);

  // if (auth) history.replace('/search');

  console.log('App');

  return (
    <div className='App-container'>
      <NavbarCustom />
      <Routes />
    </div>
  );
}

export default App;
