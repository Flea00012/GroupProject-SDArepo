//react core
import React from 'react';
//material UI icon
import DeleteIcon from '@material-ui/icons/Delete';

//CommentCard component
export default function CommentCard({ comment, handleDelete, user }) {
  return (
    <div>
      {comment.body}
      {user === comment.email ? (
        <button
          className="question-button"
          onClick={() => handleDelete(comment)}
        >
          <DeleteIcon fontSize="small" />
        </button>
      ) : null}
    </div>
  );
}
