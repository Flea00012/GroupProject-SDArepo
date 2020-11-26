import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';

// Import pages
import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
// import PostsPage from './components/posts/PostsPage';
// import ChatPage from './components/chat/ChatPage';
import AssignmentsPage from './components/assignments/AssignmentsPage';
import CoursePage from './components/courses/CoursePage';
import LecturesPage from './components/lectures/LecturesPage';
import VideosPage from './components/videos/VideosPage.jsx';
import StudentsPage from './components/students/StudentsPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route path="/courses">
            <CoursePage />
          </Route>

          <Route path="/assignments">
            <AssignmentsPage />
          </Route>

          <Route path="/lectures">
            <LecturesPage />
          </Route>

          <Route path="/students">
            <StudentsPage />
          </Route>

          <Route path="/videos">
            <VideosPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
