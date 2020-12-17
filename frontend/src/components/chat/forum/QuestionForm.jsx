import React, { useState } from "react";

function QuestionForm({ onSubmit }) {
  const [textBody, setTextBody] = useState();

  return (
    <div className="">
      <div className="forum-questionForm">
        <h5 className="forum-title">Ask a question</h5>
        <div>
          <div className="forum-input">
            <textarea
              type="text"
              className="forum-textArea"
              placeholder="What's on your mind?"
              value={textBody}
              onChange={(e) => setTextBody(e.target.value)}
            />
            {/* <span className=""> */}
            <button
              className="forum-submit"
              onClick={() => onSubmit({ textBody })}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
