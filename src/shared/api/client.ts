import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeout: 5000,
    headers: { 'Content-type' : 'application/json' }
});