import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

function ErrorContainer() {
  const { msg, status } = useSelector((state) => state.errorReducer);
  const errorAlert = <Alert variant='info'>{msg}</Alert>;
  return <div className={errorContainer}>{status ? errorAlert : ''}</div>;
}

const errorContainer = {
  display: 'block',
  heigth: '3rem',
  backgroundColor: 'yellow',
};

export default ErrorContainer;
