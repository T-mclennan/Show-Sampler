import axios from 'axios';
import keys from '../config/keys';

export const fetchShows = async (city) => {
  try {
    const { data } = await axios.get(
      `https://app.ticketmaster.com/discovery/v2/events.json?genreId=KnvZfZ7vAvF&size=200&classificationName=music&city=${city}&apikey=${keys.TICKET_CONSUMER_KEY}`
    );

    console.log(data._embedded.events);
    return data;
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

export const artistsToPlayist = async (artists, accessToken) => {
  try {
    let playlist = await Promise.all(
      artists.map(async (artist) => {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/search?q=artist:${artist}&type=track&limit=1`,
          {
            headers: { Authorization: 'Bearer ' + accessToken },
          }
        );
        return data.tracks.items[0];
      })
    );

    console.log(playlist);
    return playlist;
  } catch (error) {
    console.log(error);
  }
};
