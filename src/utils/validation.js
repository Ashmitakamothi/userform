import * as Yup from 'yup';

export const userValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  address: Yup.string().required('Address is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  nationality: Yup.string().required('Nationality is required'),
  occupation: Yup.string().required('Occupation is required'),
  interests: Yup.array()
    .of(Yup.string().required('Please enter at least one interest'))
    .min(1, 'Please enter at least one interest'),
  profilePicture: Yup.mixed().test(
    'fileSize',
    'File size is too large. Maximum size is 5 MB',
    (value) => {
      if (!value) return true; 
      return value && value.size <= 5 * 1024 * 1024; // 5 MB
    }
  ),
  additionalNotes: Yup.string(),
});
