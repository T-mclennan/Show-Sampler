import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import EventNav from './EventNav';
import PlayerDisplay from './PlayerDisplay';
import './player.css';

import PropTypes from 'prop-types';

function Player({ authToken, uriList, eventData }) {
  return (
    <div className='player-container'>
      <EventNav />
      <PlayerDisplay event_data={eventData} />
      <SpotifyPlayer
        token={authToken}
        uris={uriList}
        autoPlay={true}
        styles={playerStyle}
      />
    </div>
  );
}

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
