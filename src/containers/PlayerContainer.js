import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import queryString from 'query-string';
import './PlayerContainer.css';

export default function PlayerContainer() {
  const { access_token } = queryString.parse(window.location.search);
  const [playerToken, setPlayerToken] = useState(access_token);
  console.log(playerToken);
  return (
    <div className='player-container'>
      <p className='player-header'>This is the Playlist Page!</p>
      <SpotifyPlayer
        token={playerToken}
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      />
      ;
    </div>
  );
}
