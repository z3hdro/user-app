import {API_GET} from './apiClient';

export const getUsers = async () => {
  const result = await API_GET(
    'https://randomuser.me/api/?results=20&inc=name,location,email,picture&noinfo',
  );
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.data);
  }
};
