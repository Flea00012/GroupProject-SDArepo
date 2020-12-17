import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import Api from "../../../api/Api";

function ShowComments({ question, user }) {
  const [comments, setComments] = useState([]);

  const getAllByQuestion = () => {
    Api.get(`/comments?questionId=${question.id}`).then((res) => {
      setComments(res.data);
    });
  };

  const deleteComment = (comment) => {
    Api.delete("/comments/" + comment.id).then((r) => getAllByQuestion());
  };

  useEffect(() => {
    getAllByQuestion();
  }, [question]);

  return (
    <div>
      <h6>Comments</h6>
      {comments.map((comment) => (
        <CommentCard
          user={user}
          handleDelete={deleteComment}
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
}

export default ShowComments;
