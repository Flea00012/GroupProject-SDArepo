import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px",
    justifyItems: "center",
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        With a growing number of school closures due to COVID-19, we want to
        ensure that students educational and emotional needs are still being
        met.{" "}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Eduverse is an online learning and support tool that supplements
        traditional learning platforms used by schools. Eduverse continuously
        monitors student's engagement and their sentiment towards online
        education. In times like these where in person interactions between
        teachers and students are so rare, Eduverse's NLP registers how your
        children are coping with both their school work and their current
        environment. Teachers are provided with information drawn from childs
        contributions to the platform in the chatroom and forum to gauge their
        current attitude or 'sentiment'.
      </Typography>
    </div>
  );
}
