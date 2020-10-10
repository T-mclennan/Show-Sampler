import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './player.css';

function PlayerDisplay(props) {
  const data = useSelector((state) => state.current_event_data);

  return (
    <div className='player-display'>
      <h3>Event Display</h3>
    </div>
  );
}

PlayerDisplay.propTypes = {};

export default PlayerDisplay;
