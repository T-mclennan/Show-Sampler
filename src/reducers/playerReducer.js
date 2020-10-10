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
  event_count: 0,
};

const playerReducer = (state = initialState, action) => {
  const { event_count, event_index } = state;

  switch (action.type) {
    case 'INCREMENT_EVENT':
      const i = event_index < event_count - 1 ? event_index + 1 : 0;
      console.log(i);
      return {
        ...state,
        event_index: i,
      };

    case 'DECREMENT_EVENT':
      const d = event_index > 0 ? event_index - 1 : event_count - 1;
      console.log(d);
      return {
        ...state,
        event_index: d,
      };
    case 'SET_CURRENT_EVENT':
      return { ...state, current_event_data: action.payload };
    case 'SET_TOTAL_EVENT_DATA':
      return { ...state, total_event_data: action.payload };
    case 'SET_PLAYLIST':
      return { ...state, playlist: action.payload };

    case 'INITIALIZE_EVENT_DATA':
      return {
        ...state,
        total_event_data: action.payload,
        current_event_data: action.payload[event_index],
        event_count: action.payload.length,
      };
    default:
      return state;
  }
};

export default playerReducer;
