//react core
import React, { useState } from 'react';
//css styles
import '../../css/styles.css';

//material UI icons and styles states
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import ClearIcon from '@material-ui/icons/Clear';

//make state from material UI state
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#25274D',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: 15,
    boxShadow: [[0, 5, '#999']],
    '&:hover': {
      backgroundColor: '#464866 !important',
    },
    '&:active': {
      backgroundColor: '#3e8e41 !important',
      boxShadow: [[0, 5, '#666']],
      transform: 'translateY(4) !important',
    },
  },
}));

//CourseForm component
function CourseForm({ onSubmit, onCancel }) {
  console.log('course form');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
 
  const classes = useStyles();

  const onCreateCourseClick = (e) => {
    const courseData = { title, description };
    onSubmit(courseData).catch((err) => {
      alert('error occured');
    });
  };


  return (
    <div className="course-create-form">
      <div className="course-card-form-title">
        <h4> CREATE COURSE </h4>
      </div>
      <div className="course-card-body">
        <form onSubmit={onCreateCourseClick}>
          <div className="course-form-group">
            <label>Title:</label>

            <input
              className="input-update"
              type="text"
              maxLength="12"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="course-form-group">
            <label>Description:</label>
            <textarea
              className="input-update"
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="course-form-buttons">
            <Button
              className={classes.button}
              type="submit"
              endIcon={<Icon>send</Icon>}
            >
              Create
            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={onCancel}
              endIcon={<ClearIcon />}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;
