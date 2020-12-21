//react core
import React, { useState, useEffect } from "react";
//react router-dom module
import { Link } from "react-router-dom";
//css styles
import "../../App.css";
//Api import
import UserApi from "../../api/UserApi";

//Navbar component
export default function Navbar({ onLogout }) {
  const [currentUser, setCurrentUser] = useState("");
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      console.log("I am listening");
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("BurgToggle");
  };

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
      <nav>
        <div class="logo">
          <h7>Eduverse</h7>
        </div>
        <ul class="nav-links">
          <li>
            <Link to={`/`} className="target">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/courses`} className="target">
              Courses
            </Link>
          </li>
          <li>
            <Link to={`/scheduler`} className="target">
              Scheduler
            </Link>
          </li>
          <li>
            <Link to={`/assignments`} className="target">
              Assignments
            </Link>
          </li>
          {currentUser.userRole === "teacher" ? (
            <li>
              <Link to={`/sentiment`} className="target">
                Sentiment
              </Link>
            </li>
          ) : null}

          <li>
            <Link to={`/videos`} className="target">
              Lectures
            </Link>
          </li>
          <li>
            <Link to={`/chat`} className="target">
              Chat
            </Link>
          </li>
          <li>
            <Link to={`/resources`} className="target">
              Resources
            </Link>
          </li>
          <li>
            <Link
              to={`/resources`}
              className="logout-button"
              onClick={onLogout}
            >
              Logout
            </Link>
          </li>
        </ul>
        <div className="burger" onClick={navSlide}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}
