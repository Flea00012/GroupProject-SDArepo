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
      <div className='materialUI'>
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
        <img className='happKids' src={happyKids} />
        <HomeText />
      </div>
    </div>
  );
}

export default HomePage;
