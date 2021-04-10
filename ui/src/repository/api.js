import axios from 'axios';

const API = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080',
});

export default API;