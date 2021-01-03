//react core
import React from "react";

//react router-dom module
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//import styles
import "../../css/styles.css";

const useStyles = makeStyles({
  root: {
    minWidth: 130,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    backgroundColor: "#29648A",
    marginBottom: 10,
  },
  media: {
    height: 130,
    justifyItems: "center",
  },
  text: {
    color: "white",
  },
});

export default function MediaCard({ image, name, link, user }) {
  const classes = useStyles();

  return (
    <Link to={link} className="nav-card">
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="navigations images"
            />
            <CardContent className={classes.text}>
              <Typography variant="body2" color="white" component="p">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  );
}
