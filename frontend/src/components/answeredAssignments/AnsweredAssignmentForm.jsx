import React, { useState, useEffect } from "react";
import AssignmentsApi from "../../api/AssignmentsApi";
import AnsAssApi from "../../api/AnsweredAssignmentsApi";
import UserApi from "../../api/UserApi";
import book from "../../images/carousel/carousel-6.jpg";
import assignmentImg from "../../images/banner/banner-classassignments.png";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import "../../css/styles.css";
import CoursesApi from "../../api/CoursesApi.js";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#25274D",
    cursor: "pointer",
    textDecoration: "none",
    borderRadius: 15,
    boxShadow: [[0, 5, "#999"]],
    "&:hover": {
      backgroundColor: "#464866 !important",
    },
    "&:active": {
      backgroundColor: "#3e8e41 !important",
      boxShadow: [[0, 5, "#666"]],
      transform: "translateY(4) !important",
    },
  },
}));

export default function AnsweredAssignmentsForm({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const goBack = () =>
    {
        history.goBack();
    }
  const [answeredAssignmentTitle, setAnsweredAssignmentTitle] = useState("");
  const [
    answeredAssignmentDescription,
    setAnsweredAssignmentDescription,
  ] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");
  const [question10, setQuestion10] = useState("");
  const [assignmentId, setAssignmentId] = useState("");
  const [user, setUser] = useState(" ");
  const [course, setCourse] = useState([]);

  const subAssignmentDetails = [
    { question: question1, answer: answer1, answerFunction: setAnswer1 },
    { question: question2, answer: answer2, answerFunction: setAnswer2 },
    { question: question3, answer: answer3, answerFunction: setAnswer3 },
    { question: question4, answer: answer4, answerFunction: setAnswer4 },
    { question: question5, answer: answer5, answerFunction: setAnswer5 },
    { question: question6, answer: answer6, answerFunction: setAnswer6 },
    { question: question7, answer: answer7, answerFunction: setAnswer7 },
    { question: question8, answer: answer8, answerFunction: setAnswer8 },
    { question: question9, answer: answer9, answerFunction: setAnswer9 },
    { question: question10, answer: answer10, answerFunction: setAnswer10 },
  ];
  const getAssignmentById = (id) => {
    AssignmentsApi.getAssignmentById(id).then((response) => {
      setAssignmentId(response.data.id);
      setAnsweredAssignmentTitle(response.data.assignmentTitle);
      setAnsweredAssignmentDescription(response.data.assignmentDescription);
      setQuestion1(response.data.question1);
      setQuestion2(response.data.question2);
      setQuestion3(response.data.question3);
      setQuestion4(response.data.question4);
      setQuestion5(response.data.question5);
      setQuestion6(response.data.question6);
      setQuestion7(response.data.question7);
      setQuestion8(response.data.question8);
      setQuestion9(response.data.question9);
      setQuestion10(response.data.question10);
    });
  };

  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    getAssignmentById(match.params.assignId);
    getUserRole();
    if (match.params.courseId !== "undefined")
      getCourseById(match.params.courseId);
  }, []);

  const getCourseById = (courseId) => {
    CoursesApi.getCourseById(courseId).then((res) => {
      setCourse(res.data);
    });
  };

  const createAnsweredAssignment = (answers) => {
    AnsAssApi.createAnsweredAssignment(answers).then((response) => {
      history.goBack();
    });
  };

  return (
    <>
   
    
      <div className="card mt-4">
      <img className="assignmentimage" alt="" src={assignmentImg}   />
        <div className="card-body">
          <p />
          <h4 className="card-title">{answeredAssignmentTitle} </h4>
          <div>
            <div className="form-group">
              <label>Student Name   :</label> &nbsp;
              {user.name}
            </div>
            <div
              id="myCarousel"
              class="carousel slide"
              data-ride="carousel"
              data-interval="false"
              data-wrap="false"
            >
              <div class="carousel-inner">
                {subAssignmentDetails.map((eachQuestion, index) => (
                  <div
                    class={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <img width="100px" height="230px" alt={"assign_image"} />
                    <div class="carousel-caption  d-md-block">
                      <label>{index + 1 + ". " + eachQuestion.question}</label>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Type your answer here..."
                        value={eachQuestion.answer}
                        onChange={(e) =>
                          eachQuestion.answerFunction(e.target.value)
                        }
                      />
                      <p></p>
                      {index === 9 ? (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<Icon>send</Icon>}
                          onClick={() =>
                            createAnsweredAssignment({
                              answeredAssignmentTitle,
                              answer1,
                              answer2,
                              answer3,
                              answer4,
                              answer5,
                              answer6,
                              answer7,
                              answer8,
                              answer9,
                              answer10,
                              assignmentId,
                              user,
                              course,
                            })
                          }
                        >
                          Submit{" "}
                        </Button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
                <li data-target="#myCarousel" data-slide-to="7"></li>
                <li data-target="#myCarousel" data-slide-to="8"></li>
                <li data-target="#myCarousel" data-slide-to="9"></li>
              </ol>
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
      <Button 
              onClick={goBack}
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              >Back</Button>
                  
              </div>
    </>
  );
}
