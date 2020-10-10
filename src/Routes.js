import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './components/pages/SearchPage';
import Landing from './components/pages/Landing';
import PlayerContainer from './components/player/PlayerContainer';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/search'>
        <SearchPage />
      </Route>
      <Route exact path='/playback'>
        <PlayerContainer />
      </Route>
    </Switch>
  );
}
