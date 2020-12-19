//react core
import React, { useState } from 'react';
//react icon
import { GrSend } from 'react-icons/gr';

//CommentForm component
function CommentForm({ onSubmit, question }) {
  const [body, setBody] = useState('');

  return (
    <div className="">
      <div className="comment-card">
        <h6 className="comment-input-column">Add Comment:</h6>

        <div className="comment-input-column">
          <input
            type="text"
            className=""
            placeholder="..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button
            className="send-button"
            onClick={() => onSubmit({ body, question })}
          >
            <GrSend />
          </button>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}

export default CommentForm;
