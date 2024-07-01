"use client";
import ChangeName from "@/components/ChangeName";
import StudentDetails from "@/components/StudentDetails";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [name, setName] = useState("");

  const [students, setStudents] = useState([
    { name: "Fawaz", age: 16 },
    { name: "Amna", age: 49 },
    { name: "Rafay", age: 30 },
  ]);

  useEffect(() => {
    if (name) {
      console.log(name);
    } else {
      console.log("Hello");
    }

    console.log(students);
  }, [name, students]);

  return (
    <section className="h-screen">
      <ChangeName setName={setName} />
      <button
        onClick={() => {
          setStudents([...students, { name: "Faris", age: 50 }]);
        }}
      >
        Add Student
      </button>
      {students.map((student, index) => {
        return <StudentDetails key={index} student={student} />;
      })}
    </section>
  );
};

export default LandingPage;
