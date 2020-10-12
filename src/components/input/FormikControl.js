import React from 'react';
import DatePicker from './DatePicker';
import Input from './Input';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;

    case 'textarea':

    case 'select':

    case 'radio':

    case 'checkbox':

    case 'date':
      return <DatePicker {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
