import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { incrementEvent, decrementEvent } from '../../actions/playerActions';
import PropTypes from 'prop-types';
import './player.css';

const EventNav = ({ eventData }) => {
  const dispatch = useDispatch();
  // const event_data = useSelector(
  //   (state) => state.playerReducer.current_event_data
  // );

  const incrementIndex = useCallback(
    () => dispatch({ type: 'INCREMENT_EVENT' }),
    [dispatch]
  );

  const decrementIndex = useCallback(
    () => dispatch({ type: 'DECREMENT_EVENT' }),
    [dispatch]
  );

  return (
    <div className='event-nav'>
      <Button className='nav-btn' onClick={decrementIndex}>
        Back
      </Button>
      <h2>{eventData ? eventData.event_name : ''}</h2>
      <Button className='nav-btn' onClick={incrementIndex}>
        Forward
      </Button>
    </div>
  );
};

EventNav.propTypes = {};

export default EventNav;
