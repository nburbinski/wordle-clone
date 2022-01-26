import React from "react";

const Button = ({ onClick, letter }) => {
  const handleClick = (e) => {
    onClick(letter);
  };
  return (
    <div onClick={handleClick} className="letter">
      {letter}
    </div>
  );
};

export default Button;
