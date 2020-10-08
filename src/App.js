import React from 'react';
import Routes from './Routes';
import NavbarCustom from './components/NavbarCustom';
import './App.css';

function App() {
  return (
    <div className='App-container'>
      <NavbarCustom />
      <Routes />
    </div>
  );
}

export default App;
