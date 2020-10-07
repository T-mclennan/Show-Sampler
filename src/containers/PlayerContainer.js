import React, { useLayoutEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import queryString from 'query-string';
import {
  fetchPlaylist,
  searchArtist,
  artistsToPlayist,
  fetchShows,
} from '../api/index';
import './PlayerContainer.css';

export default function PlayerContainer() {
  const { access_token } = queryString.parse(window.location.search);
  const [playerToken, setPlayerToken] = useState(access_token);
  const [uriList, setUriList] = useState([
    // 'spotify:artist:6HQYnRM4OzToCYPpVBInuU',
    'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  ]);

  const [data, setData] = useState({});

  const artistData = [
    'dua lipa',
    'mastodon',
    'nine inch nails',
    'berri txarrak',
    'queens of the stone age',
  ];
  useLayoutEffect(() => {
    const fetchAPI = async () => {
      // const data = await artistsToPlayist(artistData, playerToken);
      const { data } = await fetchShows('Boston');
      console.log('data: ');
      setData(data);
      const playlist = await artistsToPlayist(data[0].artist_list, playerToken);
      setUriList(playlist);
    };

    fetchAPI();
  }, [playerToken]);

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
