// App reducer will store general application data such as:
//  - Auth Token
//  - Search history
//  - Color scheme

const initialState = {
  authToken: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      return { ...state, authToken: action.payload.token };
    default:
      return state;
  }
};

export default appReducer;
