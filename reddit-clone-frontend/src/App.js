// App.js (or main routing component)

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home'; // Import your existing components
import Login from './components/login'; // Import your new Login component

const App = () => {
    return (
        <Router>
            <div>
                {/* Your header/nav bar here */}
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        {/* Other navigation links */}
                    </ul>
                </nav>
                {/* Define routes */}
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/login" element={<Login/>} />
                    {/* Other routes */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
