import React from "react";
import PropTypes from "prop-types";

const renderRow = (course) => {
  return (
    <tr key={course.id}>
      <td> {course.title} </td>
      <td> {course.authorId} </td>
      <td> {course.category} </td>
    </tr>
  );
};

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authour ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{courses.map(renderRow)}</tbody>
    </table>
  );
}

CourseList.proptypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
