import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyPlayer from 'react-spotify-web-playback';
import queryString from 'query-string';
import EventNav from './EventNav';
import PlayerDisplay from './PlayerDisplay';
import {
  fetchPlaylist,
  searchArtist,
  artistsToPlayist,
  fetchShows,
} from '../../api/';
import './player.css';

export default function PlayerContainer() {
  const { access_token } = queryString.parse(window.location.search);
  const [playerToken, setPlayerToken] = useState(access_token);
  const [uriList, setUriList] = useState([
    // 'spotify:artist:6HQYnRM4OzToCYPpVBInuU',
    'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  ]);

  const [data, setData] = useState({});
  const [eventIndex, setEventIndex] = useState(5);

  useLayoutEffect(() => {
    const fetchAPI = async () => {
      // const data = await artistsToPlayist(artistData, playerToken);
      const { data } = await fetchShows('San Francisco');
      console.log('data: ');
      console.log(data);
      setData(data);
      setCurrentPlaylist(data[eventIndex].artist_list);
    };

    fetchAPI();
  }, [playerToken, eventIndex]);

  const setCurrentPlaylist = async (artist_list) => {
    const playlist = await artistsToPlayist(artist_list, playerToken);
    setUriList(playlist);
  };

  return (
    <div className='player-container'>
      <EventNav />
      {/* <p className='player-header'>This is the Playlist Page!</p> */}
      <PlayerDisplay />
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
