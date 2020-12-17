import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";

// Import pages
import SchedulerPage from './components/scheduler/SchedulerPage';
import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import AssignmentsPage from './components/assignments/AssignmentsPage';
import CoursePage from './components/courses/CoursePage';
import CourseDetailsPage from './components/courses/CourseDetailsPage';
import VideosPage from './components/videos/VideosPage.jsx';
import SentimentPage from './components/sentiment/SentimentPage';
import AssignmentsView from './components/assignments/AssignmentsView';
import AnsweredAssignmentsForm from './components/answeredAssignments/AnsweredAssignmentForm';
import Chat from './components/chat/chatComp/Chat';
import ResoursePage from './components/resourse/ResoursePage';
import AssignmentsPageUpdation from './components/assignments/AssignmentPageUpdation';
import DisplaySubmittedAssignment from './components/answeredAssignments/DisplaySubmittedAssignment';
import AssignmentSubmitted from './components/answeredAssignments/AssignmentSubmitted';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/courses">
            <CoursePage />
          </Route>

          <Route exact path="/assignments">
            <AssignmentsView />
          </Route>

          <Route
            path="/assignmentsView/:assignId"
            render={({ match }) => <AssignmentsPageUpdation match={match} />}
          />

          <Route
            path="/assignmentsAnsweredView/:assignId/:courseId"
            render={({ match }) => <AnsweredAssignmentsForm match={match} />}
          />

          <Route
            path="/assignmentsAnsweredView/:assignId"
            render={({ match }) => <AnsweredAssignmentsForm match={match} />}
          />

          <Route
            path="/assignmentsViewForCourse/:courseId"
            render={({ match }) => <AssignmentsPage match={match} />}
          ></Route>

          <Route
            path="/assignmentsViewForAdd/:course"
            render={({ match }) => <AssignmentsPage match={match} />}
          />

          <Route
            path="/assignmentsSubmittedView/:courseId"
            render={({ match }) => <DisplaySubmittedAssignment match={match} />}
          ></Route>

          <Route
            path="/assignmentSubmitted/:assignId/:name"
            render={({ match }) => <AssignmentSubmitted match={match} />}
          />
          <Route
            path="/courseDetail/:id"
            render={({ match }) => <CourseDetailsPage match={match} />}
          />

          <Route path="/courseDetails">
            <CourseDetailsPage />
          </Route>

          <Route path="/sentiment">
            <SentimentPage />
          </Route>

          <Route path="/videos">
            <VideosPage />
          </Route>

          <Route exact path="/chat">
            <Chat />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/chat">
            <Chat />
          </Route>

          <Route exact path="/resources">
            <ResoursePage />
          </Route>

          <Route exact path="/scheduler">
            <SchedulerPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
