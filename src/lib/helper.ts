import axios from 'axios';

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
