import {API_GET} from './apiClient';
import {formatUsers} from './helpers';
import {API_URL} from './constants';

export const getUsers = async () => {
  const result = await API_GET(API_URL.GET_USERS);
  if (result.success) {
    return result.data.map(formatUsers);
  } else {
    throw new Error(result.data);
  }
};
