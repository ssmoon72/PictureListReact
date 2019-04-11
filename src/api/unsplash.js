import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID bfdaacdd7acc8d6689db6afc013eb6c6ae79d7f8b56c3f175581958007e186db'
  }
});
