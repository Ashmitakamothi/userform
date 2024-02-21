import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { setUsers } from '../slices/userSlice';
import api from '../services/api';

const UserForm = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const createUser = async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
  };

  const mutation = useMutation(createUser, {
    onSuccess: (data) => {
      dispatch(setUsers(data));
      queryClient.invalidateQueries('users');
    },
  });

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      address: Yup.string().required('Address is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      dateOfBirth: Yup.date().required('Date of Birth is required'),
      gender: Yup.string().required('Gender is required'),
      nationality: Yup.string().required('Nationality is required'),
      occupation: Yup.string().required('Occupation is required'),
      interests: Yup.array().of(Yup.string()).required('Interests are required'),
      additionalNotes: Yup.string(),
    }),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" {...formik.getFieldProps('name')} />
      {formik.touched.name && formik.errors.name && (
        <div className="error">{formik.errors.name}</div>
      )}

      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email && (
        <div className="error">{formik.errors.email}</div>
      )}

      <label htmlFor="address">Address</label>
      <input type="text" id="address" {...formik.getFieldProps('address')} />
      {formik.touched.address && formik.errors.address && (
        <div className="error">{formik.errors.address}</div>
      )}

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="text" id="phoneNumber" {...formik.getFieldProps('phoneNumber')} />
      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
        <div className="error">{formik.errors.phoneNumber}</div>
      )}

      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input type="date" id="dateOfBirth" {...formik.getFieldProps('dateOfBirth')} />
      {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
        <div className="error">{formik.errors.dateOfBirth}</div>
      )}

      <label htmlFor="gender">Gender</label>
      <input type="text" id="gender" {...formik.getFieldProps('gender')} />
      {formik.touched.gender && formik.errors.gender && (
        <div className="error">{formik.errors.gender}</div>
      )}

      <label htmlFor="nationality">Nationality</label>
      <input type="text" id="nationality" {...formik.getFieldProps('nationality')} />
      {formik.touched.nationality && formik.errors.nationality && (
        <div className="error">{formik.errors.nationality}</div>
      )}

      <label htmlFor="occupation">Occupation</label>
      <input type="text" id="occupation" {...formik.getFieldProps('occupation')} />
      {formik.touched.occupation && formik.errors.occupation && (
        <div className="error">{formik.errors.occupation}</div>
      )}

      <label htmlFor="interests">Interests</label>
      <input
        type="text"
        id="interests"
        {...formik.getFieldProps('interests')}
        placeholder="Enter interests separated by commas"
      />
      {formik.touched.interests && formik.errors.interests && (
        <div className="error">{formik.errors.interests}</div>
      )}

      <label htmlFor="profilePicture">Profile Picture</label>
      <input type="file" id="profilePicture" {...formik.getFieldProps('profilePicture')} />
      {formik.touched.profilePicture && formik.errors.profilePicture && (
        <div className="error">{formik.errors.profilePicture}</div>
      )}

      <label htmlFor="additionalNotes">Additional Notes</label>
      <textarea
        id="additionalNotes"
        {...formik.getFieldProps('additionalNotes')}
      />
      {formik.touched.additionalNotes && formik.errors.additionalNotes && (
        <div className="error">{formik.errors.additionalNotes}</div>
      )}

      <button type="submit" disabled={mutation.isLoading}>
        Submit
      </button>
    </form>
  );
};

export default UserForm;
