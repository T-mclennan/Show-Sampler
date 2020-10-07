import axios from 'axios';
import keys from '../config/keys';

export const fetchShows = async (city) => {
  try {
    console.log('Fetching: ', city);
    const event_list = await axios.get(keys.URL + `events`, {
      params: {
        city: city,
      },
    });
    return event_list;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPlaylist = async (accessToken) => {
  try {
    const { data } = await axios.get('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + accessToken },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchArtist = async (artist, accessToken) => {
  try {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/search?q=artist:${artist}`,
      {
        headers: { Authorization: 'Bearer ' + accessToken },
      }
    );
    console.log(data);
    const track = data.tracks.items[0];
    console.log(track);
    return track;
  } catch (error) {
    console.log(error);
  }
};

// artistsToPlayist takes an array of artist names, returns playlist of URI tracks:
//Input: Array of strings
//Output: Array of strings

export const artistsToPlayist = async (artists, accessToken) => {
  try {
    const n = Math.ceil(10 / artists.length);
    let playlist = await Promise.all(
      artists.map(async (artist) => {
        try {
          const { data } = await axios.get(
            `https://api.spotify.com/v1/search?q=artist:"${artist}"&type=track&limit=${n}`,
            {
              headers: { Authorization: 'Bearer ' + accessToken },
            }
          );
          const uri_list = data.tracks.items.map(({ uri }) => uri);
          return uri_list;
        } catch (e) {
          console.log(e);
          return null;
        }
      })
    );
    const filtered_list = playlist.flat().filter((artist) => artist !== null);
    return filtered_list;
  } catch (error) {
    console.log(error);
  }
};
