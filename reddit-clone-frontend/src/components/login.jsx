import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and create account

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isLogin) {
            // Handle login logic
            console.log('Logging in with:', username, password);
        } else {
            // Handle create account logic
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            console.log('Creating account with:', username, password);
            // Add logic to create account
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {!isLogin && (
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div>
                    <button type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
                </div>
            </form>
            <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Create Account' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default Login;
