import React from "react";
import { Link } from "react-router-dom";

export default function Video({ data }) {
  const {
    id,
    title,
    description,
    channelName,
    channelThumb,
    views,
    videoThumb,
  } = data;

  return (
    <article>
      <Link to={`video/${id}`}>
        <img src={videoThumb} alt={description}></img>
      </Link>
      <aside>
        <div>
          <img src={channelThumb} alt="Channel thumbnail" />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{channelName}</p>
          <p>{views} views</p>
        </div>
      </aside>
    </article>
  );
}
