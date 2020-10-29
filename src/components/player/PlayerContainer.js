import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { artistsToPlayist } from '../../api/';
import Player from './Player';

export default function PlayerContainer() {
  console.log('player container');
  const index = useSelector((state) => state.playerReducer.event_index);
  const auth = useSelector((state) => state.appReducer.auth_token);
  const eventCount = useSelector((state) => state.playerReducer.event_count);
  const eventData = useSelector(
    (state) => state.playerReducer.total_event_data[index]
  );

  // console.log(eventData.artist_list);
  const { token } = auth;

  const [uriList, setUriList] = useState([
    // 'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  ]);

  // const [playlist, setPlaylist] = useState([]);

  // let initialCache = new Array(eventCount).fill(null);
  const [playlistCache, setPlaylistCache] = useState(
    new Array(eventCount).fill(null)
  );

  console.log('playlist cache');
  console.log(playlistCache);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // If playlist at index is in cache, set as playlist.
    // Else fetch playlist, add to cache, set as playlist.
    const { artist_list } = eventData;
    const generatePlaylist = async (artist_list) => {
      if (playlistCache[index]) {
        setUriList(playlistCache[index]);
      } else {
        const playlist = await artistsToPlayist(artist_list, token);
        setUriList(playlist);
        const newCache = playlistCache;
        newCache[index] = playlist;
        setPlaylistCache(newCache);
      }
    };

    generatePlaylist(artist_list);
  }, [index]);

  return <Player authToken={auth} uriList={uriList} eventData={eventData} />;
}
