import axios from 'axios';

import { TEmployee } from '@/components/elements/employee';

const BASE_URL = 'http://localhost:3000';

export const getUsers = async () => {
  const res = await axios
    .get(`${BASE_URL}/api/users`)
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));

  return res;
};

export const getUser = async (userId: string) => {
  const res = await axios
    .get(`${BASE_URL}/api/users/${userId}`)
    .then(res => {
      return res.data;
    })
    .catch(error => console.log(error));

  return res;
};

const config = {
  headers: { 'Content-Type': 'application/json' },
  onUploadProgress: (event: any) => {
    console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
  }
};

export const postUser = async (formData: TEmployee) => {
  const res = await axios
    .post(`${BASE_URL}/api/users`, formData, config)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(error => console.log(error));

  return res;
};

export const updateUser = async (userId: string, formData: TEmployee) => {
  const res = await axios
    .put(`${BASE_URL}/api/users/${userId}`, formData, config)
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(error => console.log(error));

  return res;
};

export const deleteUser = async (userId: string) => {
  await axios.delete(`${BASE_URL}/api/users/${userId}`);
};

export function randomNumber() {
  return Math.floor(Math.random() * 20);
}
