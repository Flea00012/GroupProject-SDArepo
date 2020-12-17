// React course page
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { RiDeleteBin7Line, RiEdit2Line } from "react-icons/ri";
import DeleteIcon from "@material-ui/icons/Delete";

import { Link } from "react-router-dom";
import courseImg from "../../images/Icons/coursebook.png";
//import courseImg from '../../images/Icons/courses-icon.png';
import CourseUpdateForm from "./CourseUpdateForm.js";
import CourseForm from "./CourseForm.js";
import { Tooltip } from "@material-ui/core";
import "../../css/styles.css";
export default function Course({
  course,
  onCourseDelete,
  onCourseUpdate,
  currentUserRole,
}) {
  const { id, title } = course;
  const [formState, setFormState] = useState(false);

  const onCancelUpdate = () => {
    setFormState(false);
  };

  return (
    <div>
      {formState ? (
        <div className="course-create-form">
          <CourseUpdateForm
            key={course.id}
            changeFormState={setFormState}
            oldCourse={course}
            onCourseUpdate={onCourseUpdate}
            onCancelUpdate={onCancelUpdate}
          />
        </div>
      ) : (
        <div className="course-card">
          <div className="courselinkimage">
            <Link to={`/courseDetail/${id}`}>
              <img className="courseimage" src={courseImg} alt={title} />
            </Link>
            <h4 className="course-card-title">{title}</h4>
          </div>

          <div className="course-card-buttons">
            {currentUserRole === "teacher" ? (
              <div>
                <button
                  className="create-deleteButton"
                  onClick={() => onCourseDelete(course)}
                >
                  <DeleteIcon fontSize="small" />
                </button>
                <button
                  className="create-updateButton"
                  onClick={() => setFormState(true)}
                >
                  <RiEdit2Line />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
