import React from "react";

const StudentDetails = ({ student }) => {
  return (
    <div>
      <h1>Name: {student.name}</h1>
      <h1>Age: {student.age}</h1>
    </div>
  );
};

export default StudentDetails;
