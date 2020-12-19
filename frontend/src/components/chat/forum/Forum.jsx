//react corse
import React, { useState, useEffect } from 'react';
//axios instance
import QuestionsApi from '../../../api/QuestionsApi';
//QuestionForm component
import QuestionForm from './QuestionForm';
//showQuestions component
import ShowQuestions from './ShowQuestions';
//css styles
import Style from '../../../css/chat.css';

//Forum Component
function Forum() {
  const [questions, setQuestions] = useState([]);

  const viewQuestions = () => {
    QuestionsApi.getAllQuestions().then((response) => {
      setQuestions(response.data);
    });
  };
  useEffect(() => {
    viewQuestions();
  }, []);

  const createQuestion = (question) => {
    QuestionsApi.createQuestion(question).then((res) =>
      setQuestions([...questions, res.data])
    );
  };

  return (
    <div>
      <div className="forumbox">
        {questions.map((question) => (
          <ShowQuestions key={question.id} question={question} />
        ))}
      </div>
      <div>
        <QuestionForm onSubmit={createQuestion} />
      </div>
      <></>
    </div>
  );
}

export default Forum;
