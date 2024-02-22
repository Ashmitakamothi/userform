import { useMutation } from 'react-query';
import { createUser } from '../services/api';

export const useUserData = () => {
  const createUserMutation = useMutation((user) => createUser(user));

  const createUserData = async (userData) => {
    try {
      await createUserMutation.mutateAsync(userData);
      console.log('User created successfully');
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {
    createUserData,
  };
};
