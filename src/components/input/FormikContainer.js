import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
// import './InputForm.css';

function FormikContainer() {
  const initialValues = { city: '', date: [new Date(), null] };
  const validationSchema = Yup.object({
    city: Yup.string().required('Required'),
    date: Yup.array().of(Yup.date()),

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

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
