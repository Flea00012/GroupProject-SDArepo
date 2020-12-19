//react core
import React, { useState } from "react";
//material UI components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";
import LecturesApi from "../../api/LecturesApi";
import ClearIcon from '@material-ui/icons/Clear';

//material UI state from makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "white",
      backgroundColor: "white",
    },
  },

  button: {
    margin: theme.spacing(1),
    color: "white",
    backgroundColor: "#25274D",
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

//VideoUploadForm Component
export default function VideoUploadForm({ course, currentUser, setLectureFormstate }) {
  const [videoName, setVideoName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const classes = useStyles();
  const [videos, setVideos] = useState([]);

  const createVideo = (videoData) => {
    LecturesApi.createLecture(videoData)
      .then((res) => setVideos([...videos, res.data]))
      .catch((err) => console.error(err));
    window.location.reload();
  };

  const onCancelVideoUpload = () => {
    setLectureFormstate(true);
  };

  return (
    <>
      <h3 className="upload-video-title">Upload Video</h3>
      <hr />

      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
          id="filled-basic"
          label="Enter video name"
          variant="filled"
          value={videoName}
          onChange={(e) => setVideoName(e.target.value)}
          
        />
        <TextField
          id="filled-basic"
          label="Enter video URL"
          variant="filled"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </form>
      {currentUser.userRole === "teacher" ? (
        <div>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
          onClick={() => {
            createVideo({ videoName, currentUser, videoUrl, course });
            setVideoName("");
          }}
        >
          Upload
        </Button>
        <Button
              className={classes.button}
              type="button"
              onClick={onCancelVideoUpload}
              endIcon={<ClearIcon />}
            >
              Cancel
            </Button>
        </div>
      ) : null}
      <hr />
    </>
  );
}
