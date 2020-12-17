import React from "react";

import "../../App.css";

export default function Navbar({ onLogout }) {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("BurgToggle");
  };

  return (
    <div>
      <nav>
        <div class="logo">
          <h6>EDUCATIONAL ENVIRONMENT</h6>
        </div>
        <ul class="nav-links">
          <li>
            <a href="/" class="target">
              Home
            </a>
          </li>
          <li>
            <a href="/courses" class="target">
              Courses
            </a>
          </li>
          <li>
            <a href="/scheduler" class="target">
              Scheduler
            </a>
          </li>
          <li>
            <a href="/assignments" class="target">
              Assignments
            </a>
          </li>
          <li>
            <a href="/sentiment" class="target">
              Sentiment
            </a>
          </li>
          <li>
            <a href="/videos" class="target">
              Lectures
            </a>
          </li>
          <li>
            <a href="/chat" class="target">
              Chat
            </a>
          </li>
          <li>
            <a href="/resources" class="target">
              Resources
            </a>
          </li>
          <li>
            <a className="logout-button" class="target" onClick={onLogout}>
              Logout
            </a>
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
