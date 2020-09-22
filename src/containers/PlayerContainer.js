import React, { useLayoutEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import queryString from 'query-string';
import { fetchPlaylist, searchArtists } from '../api/index';
import './PlayerContainer.css';

export default function PlayerContainer() {
  const { access_token } = queryString.parse(window.location.search);
  const [playerToken, setPlayerToken] = useState(access_token);
  const [uriList, setUriList] = useState([
    // 'spotify:artist:6HQYnRM4OzToCYPpVBInuU',
    'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  ]);

  const [data, setData] = useState({});

  useLayoutEffect(() => {
    const fetchAPI = async () => {
      const data = await searchArtists('dua lipa', playerToken);
      setData(data);
      setUriList(data.uri);
    };

    fetchAPI();
  }, [playerToken]);

  console.log(playerToken);
  return (
    <div className='player-container'>
      <p className='player-header'>This is the Playlist Page!</p>
      <SpotifyPlayer
        token={playerToken}
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
