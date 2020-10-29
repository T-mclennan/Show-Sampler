// App reducer will store general application data such as:
//  - Auth Token
//  - Search history
//  - Color scheme

//Show_data refers to pre-processed data from ticketmaster.
//This is different from event_data in the playerReducer, which is processed.
const initialState = {
  auth_token: '',
  color_scheme: 'light',
  is_loading: false,
  is_error: false,
  error_message: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      const auth = action.payload;
      return { ...state, auth_token: auth };

    case 'SET_SHOW_DATA':
      return { ...state, show_data: action.payload };

    case 'CLEAR_APP_DATA':
      return initialState;

    default:
      return state;
  }
};

export default appReducer;
