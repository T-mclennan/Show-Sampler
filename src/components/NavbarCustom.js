import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './Navbar.css';

export default function NavbarCustom() {
  console.log('navbar');
  return (
    <Navbar className='navbar' fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Show Sampler</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
    // <>
    //   <div className='navbar'>
    //     <div className='navbar-container container'>
    //       <Link to='/'>Show Sampler</Link>
    //     </div>
    //   </div>
    // </>
  );
}
