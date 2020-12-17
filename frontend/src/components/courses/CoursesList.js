import React from "react";
import Course from "./Course";

function CoursesList({ courses, onCourseDelete, onCourseUpdate, currentUser }) {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          onCourseDelete={onCourseDelete}
          onCourseUpdate={onCourseUpdate}
          currentUserRole={currentUser}
        />
      ))}
    </div>
  );
}

export default CoursesList;
