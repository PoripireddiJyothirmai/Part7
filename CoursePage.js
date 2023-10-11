import React from 'react';

function Course() {
  const enrolledCourses = ["Mathematics", "Physics", "Computer Science"]; // Example data

  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
