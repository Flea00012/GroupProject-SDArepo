import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import CoursesApi from "../../api/CoursesApi";
import CoursesList from "./CoursesList";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import UserApi from "../../api/UserApi";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#25274D",
    color: "white",
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

function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  //useState variables
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState("");

  const getAll = () => {
    CoursesApi.getAllCourses().then((res) => {
      setCourses(res.data.sort((a, b) => b.id - a.id));
    });
  };

  //Get userRole call
  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data.userRole);
    });
  };

  useEffect(() => {
    getAll();
    getUserRole();
  }, []);

  const createCourse = (courseData) => {
    return CoursesApi.createCourse(courseData).then((res) => {
      setCourses([res.data, ...courses]);
    });
  };

  const onCancelCreateCourse = () => {
    setOpenForm(false);
  };

  const deleteCourse = (course) => {
    return CoursesApi.deleteCourse(course.id).then(() =>
      setCourses(courses.filter((a) => a.id !== course.id))
    );
  };

  const onCreateNewCourse = () => {
    setOpenForm(true);
  };

  const updateCourse = (updatedCourse) => {
    CoursesApi.updateCourse(updatedCourse).then((r) => getAll());
  };

  return (
    <div>
      <div className="course-banner">Courses</div>
      <hr />

      <div className="row-buttons">
        {openForm ? (
          <CourseForm onSubmit={createCourse} onCancel={onCancelCreateCourse} />
        ) : (
          <>
            {currentUser === "teacher" ? (
              <Button
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={onCreateNewCourse}
              >
                Create Course
              </Button>
            ) : null}
            <div className="course-container"></div>
            <div className="media">
              <CoursesList
                courses={courses}
                onCourseDelete={deleteCourse}
                onCourseUpdate={updateCourse}
                currentUser={currentUser}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default CoursePage;
