import React from "react";

import { Link } from "react-router-dom";

//media
import CourseGraphic from "../../images/Icons/undraw_Bookshelves_re_lxoy (1).png";
import Calender from "../../images/Icons/undraw_Booking_re_gw4j (1).png";
import Sentiment from "../../images/Icons/undraw_true_friends_c94g (1).png";
import chatIcon from "../../images/Icons/undraw_Chatting_re_j55r (1).png";
import assignmentIcon from "../../images/Icons/undraw_Personal_notebook_re_d7dc (1).png";
import videoIcon from "../../images/Icons/undraw_online_media_62jb (2).png";
import apple from "../../images/Icons/undraw_mobile_apps_spmp (2).png";
import "../../css/styles.css";
import happyKids from "../../images/edvin-johansson-UGGinojhaC0-unsplash.jpg";

function HomePage() {
  return (
    <div>
      <div class="row">
        <div class="column">
          <Link to="/scheduler" className="nav-card">
            <div class="card-nav1">
              <img
                className="NavImage-responsive"
                src={Calender}
                alt="Open Book"
              ></img>
              Scheduler
            </div>
          </Link>
        </div>

        <div className="column">
          <Link to="/courses" className="nav-card">
            <div className="card-nav2">
              <img
                className="NavImage-responsive"
                src={CourseGraphic}
                alt="Open Book"
              ></img>
              Courses
            </div>
          </Link>
        </div>

        <div className="column">
          <Link to="/assignments" className="nav-card">
            <div className="card-nav3">
              <img
                className="NavImage-responsive"
                src={assignmentIcon}
                alt="Open Book"
              ></img>
              Assignments
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/sentiment" className="nav-card">
            <div className="card-nav4">
              <img
                className="NavImage-responsive"
                src={Sentiment}
                alt="Open Book"
              ></img>
              Sentiment
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/videos" className="nav-card">
            <div className="card-nav5">
              <img
                className="NavImage-responsive"
                src={videoIcon}
                alt="Open Book"
              ></img>
              Lectures
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/chat" className="nav-card">
            <div className="card-nav6">
              <img
                className="NavImage-responsive"
                src={chatIcon}
                alt="Open Book"
              ></img>
              Forum
            </div>
          </Link>
        </div>
        <div className="column">
          <Link to="/resources" className="nav-card">
            <div className="card-nav7">
              <img
                className="NavImage-responsive"
                src={apple}
                alt="Open Book"
              ></img>
              Resources
            </div>
          </Link>
        </div>
      </div>

      <div className="home-column">
        <div className="homepage">
          {" "}
          <h3 className="description-title">Supporting Students</h3>
          <p>
            With a growing number of school closures due to COVID-19, we want to
            ensure that students educational and emotional needs are still being
            met.{" "}
          </p>
          <p>
            EE is an online learning and support tool that supplements
            traditional learning platforms used by schools. EE continuously
            monitors your the classes engagement and their sentiment towards
            online education. In times like these where in person interactions
            between teachers and students are so rare, EE's NLP registers how
            your children are coping with both their school work and their
            current environment. Your childrens teachers are provided with
            information drawn from your childs contributions to the platform in
            the chatroom and forum to gauge their current attitude or
            'sentiment'.
          </p>{" "}
        </div>
        <img className="happKids" src={happyKids} alt={happyKids} />
      </div>
    </div>
  );
}

export default HomePage;
