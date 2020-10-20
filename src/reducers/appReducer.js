// App reducer will store general application data such as:
//  - Auth Token
//  - Search history
//  - Color scheme

//Show_data refers to pre-processed data from ticketmaster.
//This is different from event_data in the playerReducer, which is processed.
const initialState = localStorage.getItem('appState') || {
  auth_token: '',
  color_scheme: 'light',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      const auth = action.payload;
      return { ...state, auth_token: auth };

    case 'SET_SHOW_DATA':
      return { ...state, show_data: action.payload };

    default:
      return state;
  }
};

export default appReducer;
