import axios from 'axios';

export const addToken = (data) => {
  return {
    type: 'ADD_TOKEN',
    payload: data,
  };
};

export const refreashToken = () => (dispatch) => {
  console.log('refresh token');
  axios
    .get('http://localhost:8888/refresh', { withCredentials: true })
    .then((res) => {
      if (res.status == 200) {
        const auth_token = res.data;
        console.log(auth_token);
        dispatch(addToken(auth_token));
      }
    })
    .catch((e) => console.log('Error: ', e));
};

export const toggleDarkMode = () => {};
