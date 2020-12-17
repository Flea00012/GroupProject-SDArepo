import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#29648A",
    borderStyle: "solid",
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#25274D",
  },
  summary: {
    backgroundColor: "#29648A",
    color: "white",
  },
}));

function AccordianForAssignment({ questions, answers }) {
  const {
    id,
    assignmentTitle,
    assignmentDescription,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
  } = questions;
  const {
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
    answer8,
    answer9,
    answer10,
  } = answers;

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}> {question1}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer1}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question2}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer2}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question3}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer3}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question4}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer4}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question5}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer5}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question6}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer6}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question7}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer7}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question8}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer8}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question9}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer9}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{question10}</Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.summary}>
            <Typography>{answer10}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export default AccordianForAssignment;
