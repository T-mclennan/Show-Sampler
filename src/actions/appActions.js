export const addTokens = (data) => {
  return {
    type: 'ADD_TOKENS',
    payload: data,
  };
};

export const setShowData = (data) => {
  return {
    type: 'SET_SHOW_DATA',
    payload: data,
  };
};

export const isLoadingEvents = () => {
  return {
    type: 'IS_LOADING_EVENTS',
  };
};

export const login = () => {
  //TODO: Use window.location.pathname to get a redirect endpoint. Send that to
};

export const refreashToken = () => {
  //Get request
};
