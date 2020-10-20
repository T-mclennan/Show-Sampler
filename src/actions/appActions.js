import axios from 'axios';

export const addToken = (data) => {
  console.log('add token: ');
  console.log(data);
  return {
    type: 'ADD_TOKEN',
    payload: data,
  };
};

export const refreashToken = () => (dispatch) => {
  console.log('refresh token');
  axios
    .get('http://localhost:8888/refresh', { withCredentials: true })
    .then((auth) => {
      dispatch(addToken(auth));
    })
    .catch((e) => console.log('Error: ', e));
};

export const toggleDarkMode = () => {};
