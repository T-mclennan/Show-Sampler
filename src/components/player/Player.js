import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import EventNav from './EventNav';
import PlayerDisplay from './PlayerDisplay';
import { useDispatch, useSelector } from 'react-redux';
import './player.css';

import PropTypes from 'prop-types';
import { refreashToken } from '../../actions/appActions';

const Player = ({ authToken, uriList, eventData }) => {
  const dispatch = useDispatch();

  console.log('Spotify Player');

  const checkTokenExpiration = () => {
    // Check current time against expiration time
  };

  const isTimePassed = () => {};

  return (
    <div className='player-container'>
      <EventNav />
      <PlayerDisplay event_data={eventData} />
      <SpotifyPlayer
        token={authToken}
        uris={uriList}
        autoPlay={true}
        styles={playerStyle}
        callback={(state) => {
          console.log('Player:');
          console.log(state);
          console.log(state.status);
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
