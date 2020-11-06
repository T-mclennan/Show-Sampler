import React, { useState, useEffect } from 'react';
import Routes from './Routes';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavbarCustom from './components/NavbarCustom';
import './App.css';

function App() {
  console.log('App');

  return (
    <div className='App-container'>
      <NavbarCustom />
      <Routes />
    </div>
  );
}

export default App;
