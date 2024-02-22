import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useUserData } from '../hooks/useUserData';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required'),
    nationality: Yup.string().required('Nationality is required'),
    occupation: Yup.string().required('Occupation is required'),
    interests: Yup.array().of(Yup.string()),
    profilePicture: Yup.mixed().required('Profile Picture is required'),
    additionalNotes: Yup.string(),
  });

const FormComponent = () => {
  const { createUserData } = useUserData();

  const handleSubmit = async (values) => {
    try {
      await createUserData(values);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <Formik
     initialValues={{
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        nationality: '',
        occupation: '',
        interests: [],
        profilePicture: null,
        additionalNotes: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
      <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage name="address" component="div" />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <Field type="text" id="phoneNumber" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" component="div" />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <Field type="date" id="dateOfBirth" name="dateOfBirth" />
          <ErrorMessage name="dateOfBirth" component="div" />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <Field type="text" id="gender" name="gender" />
          <ErrorMessage name="gender" component="div" />
        </div>

        <div>
          <label htmlFor="nationality">Nationality:</label>
          <Field type="text" id="nationality" name="nationality" />
          <ErrorMessage name="nationality" component="div" />
        </div>

        <div>
          <label htmlFor="occupation">Occupation:</label>
          <Field type="text" id="occupation" name="occupation" />
          <ErrorMessage name="occupation" component="div" />
        </div>

        <div>
          <label htmlFor="interests">Interests:</label>
          <Field type="text" id="interests" name="interests" />
          <ErrorMessage name="interests" component="div" />
        </div>

        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <Field type="file" id="profilePicture" name="profilePicture" />
          <ErrorMessage name="profilePicture" component="div" />
        </div>

        <div>
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <Field as="textarea" id="additionalNotes" name="additionalNotes" />
          <ErrorMessage name="additionalNotes" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
