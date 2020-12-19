// React core
import React, { useState } from 'react';
//react hook for useEffect
import { useEffect } from 'react';
//axios instance
import AnsweredAssignmentsApi from '../../api/AnsweredAssignmentsApi';
//material UI icon
import StarIcon from '@material-ui/icons/Star';

//AssignmentGrade component with stars for student rating
export default function AssignmentGrade({ assignmentId, userId }) {
  const [grade, setGrade] = useState('');

  const getGrade = () => {
    var ratingArray = new Array(0);
    AnsweredAssignmentsApi.getAssignmentAnswerByUserID(
      assignmentId,
      userId
    ).then((response) => {
      if (response.data.rating != null) {
        ratingArray = new Array(response.data.rating).fill(
          <StarIcon style={{ color: '#25274D' }} />
        );
      }
      setGrade(ratingArray);
    });
  };

  const repeatStringNumTimes = (times) => {
    var repeatedString = '';
    while (times > 0) {
      repeatedString += <i class="far fa-star"></i>;
      times--;
    }
    return repeatedString;
  };

  useEffect(() => {
    getGrade();
  }, []);

  return <p>{grade ? <p> Grade: {grade} </p> : <p>Not yet Graded </p>}</p>;
}
