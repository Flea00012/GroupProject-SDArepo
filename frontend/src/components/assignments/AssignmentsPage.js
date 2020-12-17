import React, { useState, useEffect } from "react";
import AssignmentsApi from "../../api/AssignmentsApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import assignmentImg from "../../images/banner/banner-classassignments.png";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CoursesApi from "../../api/CoursesApi";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#25274D",
    cursor: "pointer",
    color: "white",
    outline: "none",
    border: "none",
    borderRadius: 15,
    transform: "translateY(4)",
    boxShadow: [[0, 5, "#999"]],
    "&:hover": {
      backgroundColor: "#464866 !important",
    },
  },
}));

function AssignmentsPage({ match }) {
  const classes = useStyles();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const history = useHistory();

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
  const [assignId, setAssignId] = useState("");
  const [course, setCourse] = useState([]);

  const getCourseById = (courseId) => {
    CoursesApi.getCourseById(courseId).then((res) => {
      setCourse(res.data);
    });
  };

  useEffect(() => {
    getCourseById(match.params.courseId);
  }, []);

  const handleSubmit = (e) => {
    let val1 = document.getElementById("title");

    let val2 = document.getElementById("description");

    let assignTitle = val1.value;
    let assignDesc = val2.value;
    if (assignTitle === "") {
      alert("Assignment title must be filled out");
      return false;
    } else if (assignDesc === "") {
      alert("Assignment description must be filled out");
    } else {
      AssignmentsApi.postAssignment({
        course,
        assignmentTitle,
        assignmentDescription,
        dueDate,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
      }).then((response) => {
        setAssignId(response.data.id);
        history.go(-1);
      });
    }
  };

  return (
    <div className="container-assignment">
      <div>
        <img
          className="assignmentimage"
          src={assignmentImg}
          alt={assignmentImg}
        />
      </div>

      <div className="question">
        <div>
          <label>Assignment Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={assignmentTitle}
            className="form-control"
            onChange={(e) => setAssignmentTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Assignment Description:</label>
          <input
            id="description"
            type="text"
            value={assignmentDescription}
            className="form-control"
            onChange={(e) => setAssignmentDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Deadline: </label>
          <p></p>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            showCalendarIcon={true}
          />
        </div>

        <div>
          <label>Question 1:</label>
          <textarea
            type="text"
            value={question1}
            className="form-control"
            onChange={(e) => setQuestion1(e.target.value)}
          />
        </div>

        <div>
          <label>Question 2:</label>
          <textarea
            type="text"
            value={question2}
            className="form-control"
            onChange={(e) => setQuestion2(e.target.value)}
          />
        </div>

        <div>
          <label>Question 3:</label>
          <textarea
            type="text"
            value={question3}
            className="form-control"
            onChange={(e) => setQuestion3(e.target.value)}
          />
        </div>

        <div>
          <label>Question 4:</label>
          <textarea
            type="text"
            value={question4}
            className="form-control"
            onChange={(e) => setQuestion4(e.target.value)}
          />
        </div>

        <div>
          <label>Question 5:</label>
          <textarea
            type="text"
            value={question5}
            className="form-control"
            onChange={(e) => setQuestion5(e.target.value)}
          />
        </div>

        <div>
          <label>Question 6:</label>
          <textarea
            type="text"
            value={question6}
            className="form-control"
            onChange={(e) => setQuestion6(e.target.value)}
          />
        </div>

        <div>
          <label>Question 7:</label>
          <textarea
            type="text"
            value={question7}
            className="form-control"
            onChange={(e) => setQuestion7(e.target.value)}
          />
        </div>

        <div>
          <label>Question 8:</label>
          <textarea
            type="text"
            value={question8}
            className="form-control"
            onChange={(e) => setQuestion8(e.target.value)}
          />
        </div>

        <div>
          <label>Question 9:</label>
          <textarea
            type="text"
            value={question9}
            className="form-control"
            onChange={(e) => setQuestion9(e.target.value)}
          />
        </div>

        <div>
          <label>Question 10:</label>
          <textarea
            type="text"
            value={question10}
            className="form-control"
            onChange={(e) => setQuestion10(e.target.value)}
          />
        </div>

        <div className="card-header">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            onClick={() => handleSubmit()}
          >
            Add Assignment
          </Button>
          <Link to={`/courseDetail/${match.params.courseId}`}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
            >
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AssignmentsPage;
