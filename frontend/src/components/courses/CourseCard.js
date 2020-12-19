// React core
import React from "react";
//react router-dom module
import { Link } from "react-router-dom";

//CourseCard component
export default function CourseCard({ data }) {
  const { id, title } = data;

  return (
    <div className="course-card">
      <Link to={`/assignmentsViewForCourse/${id}`}>
        <div className="card-content">
          <h3 className="course-card-title">{title}</h3>
        </div>
      </Link>
    </div>
  );
}
