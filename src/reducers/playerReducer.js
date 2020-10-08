// Player Reducer will hold playback related data such as:
// Current event data
// Current track playing
// Current artist data, etc.

const initialState = {
  event_index: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_EVENT':
      return state.event_index + 1;
    case 'DECREMENT_EVENT':
      return state.event_index - 1;
    default:
      return state;
  }
};

export default playerReducer;
