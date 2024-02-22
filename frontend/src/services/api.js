import { useQuery, useMutation, useQueryClient } from 'react-query';

const API_BASE_URL = 'http://localhost:3000/users'; 

export const getAllUsers = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error('Unable to fetch user data');
  }
  return response.json();
};

export const createUser = async (user) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0].msg);
  }

  return response.json();
};
