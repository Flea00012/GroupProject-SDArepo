import React, { useState, useEffect } from "react";

import Api from "../../api/Api";

import VideoCard from "./VideoCard";

export default function Uploader() {
  const [videoInfo, setVideoInfo] = useState([]);

  const apiGet = () => {
    Api.get("/videos")

      .then((res) => {
        setVideoInfo(res.data.sort((a, b) => b.id - a.id));
      })
      .catch((err) => console.error(err));
  };

  const apiPost = () => {
    Api.post("/videos", {
      videoName: "Khan Academy - chemistry",
      url:
        "https://www.youtube.com/watch?v=1k6MUeM-pEo&list=PLSQl0a2vh4HC4B6a5O40EEhGzX48_5gMt&ab_channel=KhanAcademyOrganicChemistry",
    })
      .then((res) => console.log(res.data))

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h4>Uploader posted a video to the db</h4>

      {videoInfo.map((item) => (
        <VideoCard key={item.id} video={item} />
      ))}
    </div>
  );
}
