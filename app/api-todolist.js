import axios from 'axios';

const instance = axios.create({
  baseURL: __API_TODOLIST__,
});

export default instance;
