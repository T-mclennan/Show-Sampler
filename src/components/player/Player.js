import React, { useLayoutEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import EventNav from './EventNav';
import PlayerDisplay from './PlayerDisplay';
import { useDispatch } from 'react-redux';
import './player.css';

import PropTypes from 'prop-types';
import { redirectToLogin, refreashToken } from '../../actions/appActions';

const Player = ({ authToken, uriList, eventData }) => {
  const dispatch = useDispatch();
  const { token, expiration } = authToken;

  useLayoutEffect(() => {
    checkTokenExpiration();
  }, []);

  const checkTokenExpiration = () => {
    if (isRefreshNeeded(expiration)) {
      console.log('Refresh needed. Refreshing tokens.');
      dispatch(refreashToken());
    } else {
      console.log((expiration - Date.now()) / 60000);
    }
  };

  //Refresh needed if <20 mins left in token:
  const isRefreshNeeded = (expiration) => {
    return expiration - Date.now() < 20 * 60 * 1000;
  };

  return (
    <div className='player-container'>
      <EventNav eventData={eventData} />
      <PlayerDisplay eventData={eventData} />
      <SpotifyPlayer
        token={token}
        uris={uriList}
        autoPlay={true}
        styles={playerStyle}
        callback={(state) => {
          // console.log(state);
          checkTokenExpiration();
          if (state.devices.length < 1) {
            dispatch(refreashToken());
          }
          if (state.status === 'ERROR') {
            console.log('Error state reached');
            dispatch(redirectToLogin());
          }
        }}
      />
    </div>
  );
};

const playerStyle = {
  bgColor: '#444',
  color: '#fff',
  loaderColor: '#fff',
  sliderColor: '#1cb954',
  savedColor: '#fff',
  trackArtistColor: '#ccc',
  trackNameColor: '#fff',
};

Player.propTypes = {};

export default Player;
