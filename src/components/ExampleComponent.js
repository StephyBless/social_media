// ExampleComponent.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaHome, FaPlusCircle } from 'react-icons/fa'; // Importing FontAwesome icons
import './ExampleComponent.css';

function ExampleComponent() {
    // Applying a fade-in animation using react-spring
    const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

    // Handle button click
    const handleClick = () => {
        console.log('Add Post button clicked');
        // Add functionality for adding a post
    };

    return (
        <animated.div style={fadeInProps} className="example">
            <h2>
                <FaHome className="icon" /> Home
            </h2>
            <button className="btn" onClick={handleClick}>
                <FaPlusCircle className="icon" /> Add Post
            </button>
        </animated.div>
    );
}

export default ExampleComponent;
