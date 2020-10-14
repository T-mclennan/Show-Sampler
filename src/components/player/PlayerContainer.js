import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistsToPlayist, fetchShows } from '../../api/';
import { setPlaylist, initializeEventData } from '../../actions/playerActions';
import Player from './Player';

export default function PlayerContainer() {
  const [eventData, setEventData] = useState({});
  const index = useSelector((state) => state.playerReducer.event_index);
  const authToken = useSelector((state) => state.appReducer.auth_token);

  const [uriList, setUriList] = useState([
    'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  ]);

  const dispatch = useDispatch();
  console.log('Player Container');

  useLayoutEffect(() => {
    const fetchAPI = async () => {
      const { data } = await fetchShows('Boston');
      console.log(data);
      dispatch(initializeEventData(data));
      setEventData(data[index]);
      setCurrentPlaylist(data[index].artist_list);
    };

    fetchAPI();
  }, [index, dispatch]);

  const setCurrentPlaylist = async (artist_list) => {
    const playlist = await artistsToPlayist(artist_list, authToken);
    dispatch(setPlaylist(playlist));
    setUriList(playlist);
  };

  return (
    <Player authToken={authToken} uriList={uriList} eventData={eventData} />
  );
}
