// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import ExampleComponent from './components/ExampleComponent';
import './App.css';

import { FaHome, FaPlusCircle } from 'react-icons/fa'; // Importing icons
import myLogo from './my-logo.png'; // Import your custom logo
function App() {
    return (
        <Router>
            <div className="app">
                <nav>
                    <div className="logo-container"> 
                        <img src={myLogo} className="App-logo" alt="logo" />
                    </div>
                    <ul>
                        <li>
                            <Link to="/">
                                <FaHome className="icon" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/create">
                                <FaPlusCircle className="icon" /> Create Post
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <ExampleComponent />
            </div>
        </Router>
    );
}

export default App;
