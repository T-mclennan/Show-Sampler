import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const saveState = (state) => {
  if (typeof state != 'undefined') {
    localStorage.setItem('state', JSON.stringify(state));
  }
};

const getState = () => {
  try {
    const s = localStorage.getItem('state');
    if (s === null) return undefined;
    return JSON.parse(s);
  } catch (e) {
    return undefined;
  }
};

const initialState = getState();
console.log('initialState');
console.log(initialState);

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  saveState({
    appReducer: store.getState().appReducer,
  });
});

export default store;
