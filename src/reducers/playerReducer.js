// Player Reducer will hold playback related data such as:
// Current event data
// Current track playing
// Current artist data, etc.

// Display of player will show info on event or artist, with playlist.

const initialState = {
  event_index: 0,
  current_event_data: null,
  total_event_data: null,
  playlist: 'spotify:artist:6M2wZ9GZgrQXHCFfjv46we',
  display: 'event',
  artist: {},
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_EVENT':
      return { ...state, event_index: state.event_index + 1 };
    case 'DECREMENT_EVENT':
      return { ...state, event_index: state.event_index - 1 };
    default:
      return state;
  }
};

export default playerReducer;
