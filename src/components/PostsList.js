// src/components/PostsList.js
import React, { useState } from 'react';
import Post from './Post'; // Import the Post component

function PostsList() {
    const [posts, setPosts] = useState([
        // Example posts data
        { id: 1, title: 'First Post', content: 'This is the first post.' },
        { id: 2, title: 'Second Post', content: 'This is the second post.' }
    ]);

    const handleDeletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id)); // Remove the post with the given id
    };

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} onDelete={handleDeletePost} />
            ))}
        </div>
    );
}

export default PostsList;
