// Home.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const Home = () => {
    const [subreddits, setSubreddits] = useState([]);

    useEffect(() => {
        const fetchSubreddits = async () => {
            try {
                const response = await axiosInstance.get('/subreddits/');
                setSubreddits(response.data);
            } catch (error) {
                console.error('Error fetching subreddits:', error);
            }
        };

        fetchSubreddits();
    }, []);

    return (
        <div>
            <header>
                <h1>Sample Reddit</h1>
                <nav>
                    <ul>
                    <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </header>
            <div>
                <h2>Subreddits</h2>
                <ul>
                    {subreddits.map((subreddit) => (
                        <li key={subreddit.id}>
                            {subreddit.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
