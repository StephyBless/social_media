import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from './components/Post'; // Import the Post component

function Home() {
    const [commentInput, setCommentInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/posts")
            .then((response) => setPosts(response.data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const handleLike = (postId) => {
        axios
            .post(`http://localhost:5000/api/posts/like/${postId}`)
            .then((response) => {
                const updatedPosts = posts.map((post) =>
                    post._id === postId ? response.data : post
                );
                setPosts(updatedPosts);
            })
            .catch((error) => console.error("Error liking post:", error));
    };

    const handleAddComment = (postId, commentText) => {
        axios
            .post(`http://localhost:5000/api/posts/comment/${postId}`, {
                text: commentText,
            })
            .then((response) => {
                const updatedPosts = posts.map((post) =>
                    post._id === postId ? response.data : post
                );
                setPosts(updatedPosts);
                setCommentInput(""); // Clear input after adding comment
            })
            .catch((error) => console.error("Error adding comment:", error));
    };

    const handleDeletePost = (postId) => {
        axios
            .delete(`http://localhost:5000/api/posts/${postId}`)
            .then(() => {
                const updatedPosts = posts.filter(post => post._id !== postId);
                setPosts(updatedPosts);
            })
            .catch((error) => console.error("Error deleting post:", error));
    };

    const handleShare = (postId) => {
        const postUrl = `http://localhost:3000/posts/${postId}`; // Example URL
        navigator.clipboard.writeText(postUrl)
            .then(() => alert("Post URL copied to clipboard!"))
            .catch((error) => console.error("Error copying URL:", error));
    };

    return (
        <div className="home">
            <h2>Recent Posts</h2>
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    {post.file && (
                        <div>
                            {post.file.includes(".mp4") ? (
                                <video width="320" height="240" controls>
                                    <source
                                        src={`http://localhost:5000/uploads/${post.file}`}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img
                                    src={`http://localhost:5000/uploads/${post.file}`}
                                    alt="Post Media"
                                />
                            )}
                        </div>
                    )}
                    <p>Likes: {post.likes}</p>
                    <button onClick={() => handleLike(post._id)}>Like</button>
                    <p>Comments: {post.comments.length}</p>
                    <ul>
                        {post.comments.map((comment, index) => (
                            <li key={index}>{comment.text}</li>
                        ))}
                    </ul>

                    <input
                        type="text"
                        placeholder="Add a comment"
                        className="comment-input"
                        value={commentInput} // Controlled component
                        onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <button
                        onClick={() => handleAddComment(post._id, commentInput)}
                        className="comment-button"
                    >
                        Add Comment
                    </button>

                    <button
                        onClick={() => handleDeletePost(post._id)}
                        className="btn delete-btn"
                    >
                        Delete Post
                    </button>
                    <button
                         onClick={() => handleShare(post._id)}
                         className="share-btn"
                     >
                         Share
                     </button>
                 </div>
            ))}
        </div>
    );
}

export default Home;
