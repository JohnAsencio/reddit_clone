// src/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchSubreddits = async () => {
    try {
        console.log(`${API_URL}/subreddits/`);
        const response = await axios.get(`${API_URL}/subreddits/`);
        console.log(response.data);  // Log response data to console
        return response.data;  // Return data to caller
    } catch (error) {
        console.error('Error fetching subreddits:', error);
        throw error;  // Throw error for handling in caller function
    }
};

export const createSubreddit = async (subredditData) => {
    try {
        console.log(`${API_URL}/subreddits/`);
        const response = await axios.post(`${API_URL}subreddits/create`, subredditData);
        return response.data;
    } catch (error) {
        console.error('Error creating subreddit:', error);
        throw error;
    }
};

