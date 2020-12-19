//react course
import React, { useState, useEffect } from 'react';
// AssignmentView Component
import AssignmentsView from '../assignments/AssignmentsView';
// axios instance
import CoursesApi from '../../api/CoursesApi';
//axios instance
import UserApi from '../../api/UserApi';
//VideosPage Component
import Videos from '../videos/VideosPage';
//VideoUploadForm component
import VideoUpLoadForm from '../videos/VideoUploadForm';

//Button from material UI
import Button from '@material-ui/core/Button';
//styles state from Material IU
import { makeStyles } from '@material-ui/core/styles';
//Icon from Material UI
import Icon from '@material-ui/core/Icon';
//react router-dom module
import { Link } from 'react-router-dom';
//css styles
import '../../css/styles.css';
//material UI Icon
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

//make state from Material UI state makeStyles
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#25274D',
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
  uploadButton: {
    margin: theme.spacing(1),
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    borderRadius: 15,
    transform: 'translateY(4)',
    boxShadow: [[0, 5, '#999']],
    backgroundColor: '#25274D',
    '&:hover': {
      backgroundColor: '#464866 !important',
    },
  },
}));

//CourseDetailsPage component
export default function CourseDetailsPage({ match }) {
  const courseId = match.params.id;
  const [course, setCourse] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [openForm, setOpenForm] = useState(true);
  const [openLectureForm, setOpenLectureForm] = useState(true);

  const classes = useStyles();

  const onCreateNewAssignment = () => {
    setOpenForm(false);
  };

  const onUploadVideo = () => {
    setOpenLectureForm(false);
  };

 

  const getCourseById = (courseId) => {
    CoursesApi.getCourseById(courseId).then((res) => {
      setCourse(res.data);
    });
  };

  //Get userRole call
  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data);
    });
  };

  useEffect(() => {
    getCourseById(courseId);
    getUserRole();
  }, []);

  return (
    <>
      <div className="course-details">
        <div className="course-details-description">
          <h2 className="course-description">
            <AssignmentOutlinedIcon fontSize="large" />
            {course.title}
          </h2>
        </div>

        <div className="course-details-text">{<p>{course.description}</p>}</div>

        <div className="course-details-section">
          <div>
            <div className="assignment-details">
              <>
                <AssignmentsView course={course} currentUser={currentUser} />
                {currentUser.userRole === 'teacher' ? (
                  <Link to={`/assignmentsViewForCourse/${courseId}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<Icon>send</Icon>}
                      onClick={onCreateNewAssignment}
                    >
                      Add New Assignment
                    </Button>
                  </Link>
                ) : null}
              </>

              {currentUser.userRole === 'teacher' ? (
                <Link to={`/assignmentsSubmittedView/${courseId}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    onClick={onCreateNewAssignment}
                  >
                    View Submitted Assignment
                  </Button>
                </Link>
              ) : null}
            </div>
            <div className="lecture-details">
              <div className="check">
                {openLectureForm ? (
                  <>
                    <Videos course={course} currentUser={currentUser} />
                  </>
                ) : (
                  <VideoUpLoadForm course={course} currentUser={currentUser} setLectureFormstate={setOpenLectureForm} />
                )}
              </div>
              {currentUser.userRole === 'teacher' ? (
                <div className="buttonCheck">
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.uploadButton}
                    endIcon={<Icon>send</Icon>}
                    onClick={onUploadVideo}
                  >
                    Add new video
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
