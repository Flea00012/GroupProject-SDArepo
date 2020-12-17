import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import "../../css/styles.css";
import { spacing } from "@material-ui/system";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: " #2E9CCA;",
    maxWidth: 130,
    maxHeight: 200,
    box: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    color: " #29648A",
    padding: "0px",
    margin: "0px",
    color: "#25274D",
  },
  videocontent: {
    padding: "0px",
    margin: "0px",
  },

  cardLectures: {},
});

export default function VideoCard({ video, onDeleteClick, currentUser }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <IconButton>
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <PlayCircleFilledIcon
              style={{
                height: "50%",
                width: "50%",
                color: "#ecedfc",
              }}
            />
          </a>
        </IconButton>

        <CardContent className={classes.videocontent}></CardContent>
      </CardActionArea>
      <div className="videoiconDelete">
        <Typography variant="p" component="p" styles={{}}>
          {`${video.videoName}`}
        </Typography>
        {currentUser.userRole === "teacher" ? (
          <DeleteIcon fontSize="small" onClick={() => onDeleteClick(video)} />
        ) : null}
      </div>
    </Card>
  );
}
