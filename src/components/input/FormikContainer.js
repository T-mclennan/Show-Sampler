import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import CollapsableCheckbox from './CollabsableCheckbox';

function FormikContainer() {
  const checkboxOptions = [
    // { key: 'select an option', value: '' },
    { key: 'option 1', value: 'coption 1' },
    { key: 'option 2', value: 'coption 2' },
    { key: 'option 3', value: 'coption 3' },
    { key: 'option 4', value: 'coption 4' },
    { key: 'option 5', value: 'coption 5' },
    { key: 'option 6', value: 'coption 6' },
  ];

  const radioOptions = [
    { key: 'Option1', value: 'rOption1' },
    { key: 'Option2', value: 'rOption2' },
    { key: 'Option3', value: 'rOption3' },
  ];

  const initialValues = {
    city: '',
    date: [new Date(), null],
    radioOption: '',
    checkboxOption: [],
  };
  const validationSchema = Yup.object({
    city: Yup.string().required('Required'),
    date: Yup.array().of(Yup.date()),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required(
      'Required. Please select at least one genre.'
    ),

    // Yup.date().required('Date Required').nullable(),
  });
  const onSubmit = (values) => console.log('Form Data: ', values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl control='input' type='text' label='City' name='city' />
          <FormikControl control='date' label='Pick a Date' name='date' />
          {/* <FormikControl
            control='checkbox'
            label='Genre options'
            name='checkboxOption'
            options={checkboxOptions}
          /> */}
          <CollapsableCheckbox
            label={'Genre Options'}
            options={checkboxOptions}
          />
          <button type='submit'>Generate Playlist</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
