import React, { useState, useEffect } from 'react';
import QuestionsApi from '../../../api/QuestionsApi';
import QuestionForm from './QuestionForm';
import ShowQuestions from './ShowQuestions';
import Style from '../../../css/chat.css';

import Sentiment from '../../sentiment/Sentiment';

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
      <>
        {questions.map((question) => (
          <Sentiment key={question.id} sentence={question} />
        ))}
      </>
    </div>
  );
}

export default Forum;
