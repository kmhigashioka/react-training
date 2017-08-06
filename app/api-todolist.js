import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:29224',
});

export default instance;
