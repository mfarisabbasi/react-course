import React from "react";

const ChangeName = ({ setName }) => {
  return <button onClick={() => setName("Fawaz")}>Change Name</button>;
};

export default ChangeName;
