import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.17.127.219:3333'
});

export default api;