import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Image } from 'react-bootstrap';

import './player.css';
import PropTypes from 'prop-types';

function PlayerDisplay({ event_data }) {
  // const data = useSelector((state) => state.current_event_data);
  console.log('EVENTDATA');
  const image = event_data.images ? event_data.images[8] : 'nada';
  console.log(image);
  // const source = event_data.images[5];
  // console.log(source);
  return (
    <div className='player-display'>
      {/* <Container> */}
      <Row>
        <Col xs={6} md={4}>
          {event_data.images ? (
            <Image style={imageStyle} src={image} fluid='true' />
          ) : (
            ''
          )}
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

const imageStyle = {
  width: '50rem',
};

PlayerDisplay.propTypes = {};

export default PlayerDisplay;
