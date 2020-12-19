//react core
import React, { useState, useEffect } from 'react';
//CommentCard component
import CommentCard from './CommentCard';
//axios instance
import Api from '../../../api/Api';

//showComments Component
function ShowComments({ question, user }) {
  const [comments, setComments] = useState([]);

  const getAllByQuestion = () => {
    Api.get(`/comments?questionId=${question.id}`).then((res) => {
      setComments(res.data);
    });
  };

  const deleteComment = (comment) => {
    Api.delete('/comments/' + comment.id).then((r) => getAllByQuestion());
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
