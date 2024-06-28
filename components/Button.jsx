import React from "react";

const Button = ({ label, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} transition duration-300 hover:bg-black hover:text-white px-4 py-2 rounded-xl`}
    >
      {label}
    </button>
  );
};

export default Button;
