export const setCurrentEvent = (data) => {
  return {
    type: 'SET_CURRENT_EVENT',
    payload: data,
  };
};

export const setTotalEventData = (data) => {
  return {
    type: 'SET_TOTAL_EVENT_DATA',
    payload: data,
  };
};

export const setPlaylist = (data) => {
  return {
    type: 'SET_PLAYLIST',
    payload: data,
  };
};

export const initializeEventData = (data) => {
  console.log('initializing data:');
  console.log(data);
  return {
    type: 'INITIALIZE_EVENT_DATA',
    payload: data,
  };
};

//TODO:
//LOADING
//ERROR
