// axiosInstance.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        // Optionally add other headers here, like Authorization token
    },
});

export default axiosInstance;
