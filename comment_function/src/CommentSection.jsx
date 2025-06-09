import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]); // Stores comments
  const [newComment, setNewComment] = useState(""); // Stores input text

  // Function to add a new comment
  const handleAddComment = () => {
    if (!newComment.trim()) return; // Prevent empty comments

    const comment = {
      id: Date.now(), // Unique ID
      text: newComment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([comment, ...comments]); // Add new comment to list
    setNewComment(""); // Clear input field
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Comments</h2>

      {/* Input Field */}
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 border rounded"
      />

      {/* Submit Button */}
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white px-4 py-1 rounded mt-2"
      >
        Add Comment
      </button>

      {/* Display Comments */}
      <ul className="mt-4 space-y-2">
        {comments.map((comment) => (
          <li key={comment.id} className="p-2 border-b">
            <p>{comment.text}</p>
            <small className="text-gray-500">{comment.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
