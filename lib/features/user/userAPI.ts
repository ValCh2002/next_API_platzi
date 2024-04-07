import { IUser } from '@/type/type';
import axios from 'axios';

export const getUsersAPI = async () => {
  const { data } = await axios.get('https://api.escuelajs.co/api/v1/users');
  return data;
};

export const getUserByIdAPI = async (id: number) => {
  const { data } = await axios.get(
    'https://api.escuelajs.co/api/v1/users/' + id,
  );
  return data;
};

export const createUserAPI = async (user: IUser) => {
  const { data } = await axios.post(
    'https://api.escuelajs.co/api/v1/users',
    user,
  );
  return data;
};

export const updateUserByIdAPI = async ({
  id,
  obj,
}: {
  id: number;
  obj: { email: string; name: string };
}) => {
  const { data } = await axios.put(
    'https://api.escuelajs.co/api/v1/users/' + id,
    obj,
  );
  return data;
};
