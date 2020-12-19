//react core
import React, { useState, useEffect } from 'react';
//axios instance
import QuestionsApi from '../../../api/QuestionsApi';
//axios instance
import UserApi from '../../../api/UserApi';
//axios instance
import CommentsApi from '../../../api/CommentsApi';
// CommentForm component
import CommentForm from './CommentForm';
//showComments component
import ShowComments from './ShowComments';
//react Icons
import { RiQuestionAnswerLine } from 'react-icons/ri';
//material UI icons
import DeleteIcon from '@material-ui/icons/Delete';

//ShowQuestions component
function ShowQuestions({ question }) {
  const [formState, setFormState] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [comments, setComments] = useState([]);

  //Delete method
  const handleDelete = (question) => {
    QuestionsApi.deleteQuestion(question.id).then(() =>
      window.location.reload()
    );
  };

  const getEmailOfUser = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data.email);
    });
  };

  useEffect(() => {
    getEmailOfUser();
  }, []);

  const toggle = () => {
    setFormState(!formState);
  };

  const createComment = (commentData) => {
    CommentsApi.createComment(commentData).then(() => window.location.reload());
  };

  return (
    <div>
      <div className="question-card">
        {currentUser === question.email ? (
          <button
            className="question-button"
            onClick={() => handleDelete(question)}
          >
            <DeleteIcon fontSize="small" />
          </button>
        ) : null}
        <button className="question-button" onClick={toggle}>
          <RiQuestionAnswerLine />
        </button>
        <div>
          <p>{question.textBody}</p>
        </div>
      </div>
      <div className="question-card">
        {formState ? (
          <ShowComments user={currentUser} question={question} />
        ) : null}
        {formState ? (
          <CommentForm
            changeFormState={toggle}
            onSubmit={createComment}
            question={question}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ShowQuestions;
