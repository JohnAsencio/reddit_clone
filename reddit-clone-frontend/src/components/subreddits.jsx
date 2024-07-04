import React, { useEffect, useState } from 'react';
import { fetchSubreddits, createSubreddit } from '../api';

const Subreddits = () => {
    const [subreddits, setSubreddits] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [creator, setCreator] = useState(1); // Assuming you have a logged-in user ID

    useEffect(() => {
        const getSubreddits = async () => {
            const data = await fetchSubreddits();
            setSubreddits(data);
        };

        getSubreddits();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSubreddit = await createSubreddit(name, description, creator);
        setSubreddits([...subreddits, newSubreddit]);
        setName('');
        setDescription('');
    };

    return (
        <div>
            <h1>Subreddits</h1>
            <ul>
                {subreddits.map(subreddit => (
                    <li key={subreddit.id}>{subreddit.name}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Create Subreddit</button>
            </form>
        </div>
    );
};

export default Subreddits;