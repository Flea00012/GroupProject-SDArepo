//react core
import React from "react";

//react router-dom module
import { Link } from "react-router-dom";

//react material UI components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

//material UI icons
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

//css styling
import "../../css/styles.css";
//material UI spacing
import { spacing } from "@material-ui/system";
//material UI state from makeStyles
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

//VideoCard component
export default function VideoCard({ video, onDeleteClick, currentUser }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <IconButton>
          <Link to={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <PlayCircleFilledIcon
              style={{
                height: "50%",
                width: "50%",
                color: "#ecedfc",
              }}
            />
          </Link>
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
