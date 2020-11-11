import React from 'react';
import { useDispatch } from 'react-redux';
import { redirectToLogin, authenticateUser } from '../../actions/appActions';
import './Landing.css';

const Landing = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(authenticateUser())
    redirectToLogin();
  };

  return (
    <div className='Home'>
      <div className='lander'>
        <h1>Show Sampler</h1>
        <p>Listen to the music of upcoming concerts</p>

        <button
          onClick={clickHandler}
          style={{ marginTop: '2rem', borderRadius: '1em' }}
        >
          Sign In!
        </button>
      </div>
    </div>
  );
};

export default Landing;
