// React core
import React, { useState } from "react";
import { useEffect } from "react";
import AnsweredAssignmentsApi from "../../api/AnsweredAssignmentsApi";
import StarIcon from "@material-ui/icons/Star";

export default function AssignmentGrade({ assignmentId, userId }) {
  const [grade, setGrade] = useState("");

  const getGrade = () => {
    var ratingArray = new Array(0);
    AnsweredAssignmentsApi.getAssignmentAnswerByUserID(
      assignmentId,
      userId
    ).then((response) => {
      if (response.data.rating != null) {
        ratingArray = new Array(response.data.rating).fill(
          <StarIcon style={{ color: "#25274D" }} />
        );
      }
      setGrade(ratingArray);
    });
  };

  const repeatStringNumTimes = (times) => {
    var repeatedString = "";
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
