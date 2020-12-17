import React, { useState, useEffect } from "react";
import AssignmentsApi from "../../api/AssignmentsApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import assignmentImg from "../../images/banner/banner-classassignments.png";
import { useHistory } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#25274D",
    color: "white",
    cursor: "pointer",
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

function AssignmentsPageUpdation({ match }) {
  const classes = useStyles();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
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
  const [course, setCourse] = useState("");
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const getAssignmentById = (id) => {
    AssignmentsApi.getAssignmentById(id).then((response) => {
      setAssignId(response.data.id);
      setAssignmentTitle(response.data.assignmentTitle);
      setAssignmentDescription(response.data.assignmentDescription);
      setDueDate(new Date(response.data.dueDate));
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
      setCourse(response.data.course);
    });
  };
  useEffect(() => {
    if (typeof match.params.assignId !== "undefined" || assignId !== "") {
      getAssignmentById(match.params.assignId);
    }
  }, []);

  function handleSubmit() {
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
      window.location.reload();
    });
  }

  function handleUpdate() {
    // Creating a local variable
    const id = assignId;
    AssignmentsApi.updateAssignment({
      id,
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
      course,
    }).then((response) => {
      history.go(-1);
    });
  }

  return (
    <div className="container-assignment">
      <img className="assignmentimage" src={assignmentImg} alt={assignmentImg}/>
      <div className="question">
        <div>
          <label>Assignment Title:</label>

          <input
            type="text"
            value={assignmentTitle}
            className="form-control"
            onChange={(e) => setAssignmentTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Assignment Description:</label>

          <input
            type="text"
            value={assignmentDescription}
            className="form-control"
            onChange={(e) => setAssignmentDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Deadline: </label>
        </div>

        <div>
          <DatePicker
            selected={dueDate}
            onChange={(date) => setDueDate(date)}
            showCalendarIcon={true}
            required={true}
            calendarAriaLabel="Toggle calendar"
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
      </div>

      <div className="card-header">
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          onClick={() => handleUpdate()}
        >
          Update Assignment
        </Button>
        <Link to={`/courseDetail/${course.id}`}>
          <Button className={classes.button} endIcon={<ClearIcon />}>
            Cancel
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AssignmentsPageUpdation;
