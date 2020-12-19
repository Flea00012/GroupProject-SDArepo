//react core
import React, { useState, useEffect } from "react";
//axios instance
import LecturesApi from "../../api/LecturesApi";
//VideoCard component
import VideoCard from "./VideoCard";

//css styles for videos and page
import "../../css/videos.css";
import "../../css/styles.css";

//Videos component
export default function Videos({ course, currentUser }) {
  const [videos, setVideos] = useState([]);
  const [lectures, setLectures] = useState([]);

  const viewVideos = (course) => {
    if (typeof course !== "undefined" && course !== "") {
      LecturesApi.getAllVideos(course.id)
        .then((res) => {
          setVideos(res.data.sort((a, b) => b.id - a.id));
        })
        .catch((err) => console.error(err));
    } else {
      LecturesApi.getAllLectures()
        .then((res) => {
          setVideos(res.data.sort((a, b) => b.id - a.id));
        })
        .catch((err) => console.error(err));
    }
  };

  const deleteVideo = (video) => {
    return LecturesApi.deleteLecture(video.id).then(() =>
      setVideos(videos.filter((a) => a.id !== video.id))
    );
  };

  const uploads = () => {
    return setLectures([...new Set(videos.map((v) => v.course.title))]);
  };

  useEffect(() => {
    uploads();
  }, [videos]);

  useEffect(() => {
    viewVideos(course);
  }, [course]);

  return (
    <div>
      {lectures.map((lecture) => (
        <div className="class-videos">
          <div className="course-name">{lecture}</div>

          <div>
            {videos.map((item) => {
              if (item.course.title === lecture) {
                return (
                  <div className="videoLayout">
                    <hr></hr>
                    <VideoCard
                      key={item.id}
                      video={item}
                      onDeleteClick={deleteVideo}
                      currentUser={currentUser}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
