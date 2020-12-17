import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
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

export default function CourseUpdateForm({
  oldCourse,
  changeFormState,
  onCourseUpdate,
  onCancelUpdate,
}) {
  const [title, setTitle] = useState(oldCourse.title);
  const [description, setDescription] = useState(oldCourse.description);
  const { id, createDate } = oldCourse;
  const classes = useStyles();
  const handleUpdateCourseClick = (e) => {
    const updatedCourse = { id, description, title, createDate };

    onCourseUpdate(updatedCourse);
    changeFormState(false);
  };
  return (
    <div className="course-form-group">
      <form>
        <div className="form-group-update">
          <label>Title Name: </label>

          <input
            className="input-update"
            name="title"
            type="text"
            maxlength="12"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group-update">
          <label>Description : </label>
          <textarea
            className="input-update"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="form-group-update">
            <Button
              className={classes.button}
              type="submit"
              onClick={handleUpdateCourseClick}
              endIcon={<Icon>send</Icon>}
            >
              Update
            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={onCancelUpdate}
              endIcon={<ClearIcon />}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
