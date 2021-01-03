//react core
import React, { useState, useEffect } from "react";
//css styles
import Style from "../../css/homePage.css";
//react router-dom module
import { Link } from "react-router-dom";
//media and image imports
import CourseGraphic from "../../images/Icons/undraw_Bookshelves_re_lxoy (1).png";
import Calender from "../../images/Icons/undraw_Booking_re_gw4j (1).png";
import Sentiment from "../../images/Icons/undraw_true_friends_c94g (1).png";
import chatIcon from "../../images/Icons/undraw_Chatting_re_j55r (1).png";
import assignmentIcon from "../../images/Icons/undraw_Personal_notebook_re_d7dc (1).png";
import videoIcon from "../../images/Icons/undraw_online_media_62jb (2).png";
import Resources from "../../images/Icons/undraw_mobile_apps_spmp (2).png";
import "../../css/styles.css";
import happyKids from "../../images/edvin-johansson-UGGinojhaC0-unsplash.jpg";
import introductoryText from "../../images/introductionText.jpg";
import UserApi from "../../api/UserApi";

import HomeCard from "./HomeCard";
import HomeText from "./HomeText";

let images = [
  {
    key: "1",
    img: CourseGraphic,
    name: "Courses",
    linkTo: "/courses",
  },
  {
    key: "2",
    img: Calender,
    name: "Calendar",
    linkTo: "/scheduler",
  },
  {
    key: "3",
    img: Sentiment,
    name: "Sentiment",
    linkTo: "/sentiment",
  },
  {
    key: "4",
    img: chatIcon,
    name: "Chat",
    linkTo: "/chat",
  },
  {
    key: "5",
    img: assignmentIcon,
    name: "Assignment",
    linkTo: "/assignments",
  },
  {
    key: "6",
    img: videoIcon,
    name: "Video",
    linkTo: "/videos",
  },
  {
    key: "7",
    img: Resources,
    name: "Resources",
    linkTo: "/resources",
  },
];

console.log(images);

//HomePage component
function HomePage() {
  const [currentUser, setCurrentUser] = useState("");
  const getUserRole = () => {
    UserApi.getCurrentUser().then((response) => {
      setCurrentUser(response.data);
    });
  };

  useEffect(() => {
    getUserRole();
  }, []);

  return (
    <div>
      <div className="materialUI">
        {images.map((items) => (
          <HomeCard
            keys={items.key}
            image={items.img}
            name={items.name}
            link={items.linkTo}
            user={currentUser}
          />
        ))}
      </div>

      <div
        styles={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30",
        }}
      >
        <img className="happKids" src={happyKids} />
        <HomeText />
      </div>

      {/*  <div class="row">
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
          {currentUser.userRole === "teacher" ? (
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
          ) : (
            <Link to="#" className="nav-card">
              <div className="card-nav4">
                <h3>Hello</h3> <br></br>
                <h4>{currentUser.name}</h4>
              </div>
            </Link>
          )}
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
                src={Resources}
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
            Eduverse is an online learning and support tool that supplements
            traditional learning platforms used by schools. Eduverse
            continuously monitors student's engagement and their sentiment
            towards online education. In times like these where in person
            interactions between teachers and students are so rare, Eduverse's
            NLP registers how your children are coping with both their school
            work and their current environment. Teachers are provided with
            information drawn from childs contributions to the platform in the
            chatroom and forum to gauge their current attitude or 'sentiment'.
          </p>{" "}
        </div>
        
      </div>  */}
    </div>
  );
}

export default HomePage;
