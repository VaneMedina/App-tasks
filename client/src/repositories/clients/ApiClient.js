import axios from 'axios';

const externalApiBase = 'http://localhost:3000/api/tasks';

const apiClient = axios.create({
    baseURL: externalApiBase,
});


export default apiClient;