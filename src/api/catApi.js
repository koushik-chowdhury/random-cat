import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.freeapi.app/api/v1/public',
});

export const fetchRandomCat = async () => {
  const res = await API.get('/cats/cat/random');

  console.log(res.data); 

  return res.data.data; 
};
