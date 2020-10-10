import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { incrementEvent, decrementEvent } from '../../actions/playerActions';
import PropTypes from 'prop-types';
import './player.css';

const EventNav = (props) => {
  const dispatch = useDispatch();

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
      <h2>EVENT TITLE</h2>
      <Button className='nav-btn' onClick={incrementIndex}>
        Forward
      </Button>
    </div>
  );
};

EventNav.propTypes = {};

export default EventNav;
