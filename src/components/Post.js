// src/components/Post.js
import React, { useState } from 'react';
import { FaTrash, FaThumbsUp, FaComment } from 'react-icons/fa'; // Importing FontAwesome icons

function Post({ post, onDelete, onLike, onAddComment }) {
    const [commentInput, setCommentInput] = useState("");

    const handleDelete = () => {
        onDelete(post._id); // Call the delete handler passed via props
    };

    const handleLike = () => {
        onLike(post._id); // Call the like handler passed via props
    };

    const handleAddComment = () => {
        onAddComment(post._id, commentInput); // Call the add comment handler passed via props
        setCommentInput(""); // Clear input after adding comment
    };

    return (
        <div className="post">
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
            <button className="btn like-btn" onClick={handleLike}>
                <FaThumbsUp className="icon" /> Like
            </button>
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
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
            />
            <button
                className="btn comment-btn"
                onClick={handleAddComment}
            >
                <FaComment className="icon" /> Add Comment
            </button>
            <button className="btn delete-btn" onClick={handleDelete}>
                <FaTrash className="icon" /> Delete Post
            </button>
        </div>
    );
}

export default Post;
