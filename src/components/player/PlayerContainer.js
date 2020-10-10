import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistsToPlayist, fetchShows } from '../../api/';
import { addTokens } from '../../actions/appActions';
import { setPlaylist, initializeEventData } from '../../actions/playerActions';
import Player from './Player';

export default function PlayerContainer() {
  const params = new URLSearchParams(document.location.search.substring(1));
  const ref = params.get('r_token');
  const auth = params.get('access_token');
  const index = useSelector((state) => state.playerReducer.event_index);
  const [authToken, setAuthToken] = useState(auth);

  const [uriList, setUriList] = useState([
    'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  ]);

  const dispatch = useDispatch();

  //utility hooks:
  useEffect(() => {
    dispatch(addTokens({ auth, ref }));
  }, [dispatch]);

  useLayoutEffect(() => {
    const fetchAPI = async () => {
      const { data } = await fetchShows('Chicago');
      dispatch(initializeEventData(data));
      setCurrentPlaylist(data[index].artist_list);
    };

    fetchAPI();
  }, [index, dispatch]);

  const setCurrentPlaylist = async (artist_list) => {
    const playlist = await artistsToPlayist(artist_list, authToken);
    dispatch(setPlaylist(playlist));
    setUriList(playlist);
  };

  return <Player authToken={authToken} uriList={uriList} />;
}
