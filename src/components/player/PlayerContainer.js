import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistsToPlayist, fetchShows } from '../../api/';
import { setPlaylist, initializeEventData } from '../../actions/playerActions';
import Player from './Player';

export default function PlayerContainer() {
  const index = useSelector((state) => state.playerReducer.event_index);
  const auth = useSelector((state) => state.appReducer.auth_token);
  const eventCount = useSelector((state) => state.playerReducer.event_count);
  const eventData = useSelector(
    (state) => state.playerReducer.total_event_data[index]
  );
  const { token } = auth;

  const [uriList, setUriList] = useState([
    'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  ]);
  const [playlist, setPlaylist] = useState([]);
  let initialCache = new Array(eventCount).fill(null);
  console.log(initialCache);
  const [playlistCache, setPlaylistCache] = useState(initialCache);

  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //If playlist at index is in cache, set as playlist.
  // Else fetch playlist, add to cache, set as playlist.

  // const setCurrentPlaylist = async (artist_list) => {
  //   const playlist = await artistsToPlayist(artist_list, token);
  //   dispatch(setPlaylist(playlist));
  //   setUriList(playlist);
  // };

  // setCurrentPlaylist(data[index].artist_list);
  //   };

  //   fetchAPI();
  // }, [index, dispatch]);

  // const setCurrentPlaylist = async (artist_list) => {
  //   const playlist = await artistsToPlayist(artist_list, token);
  //   dispatch(setPlaylist(playlist));
  //   setUriList(playlist);
  // };

  return <Player authToken={auth} uriList={uriList} eventData={eventData} />;
}
