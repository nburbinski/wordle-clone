import React from "react";
import { alphabet } from "../../util/status";

const Button = ({ onClick, letter, statusOfLetters }) => {
  const status = statusOfLetters[alphabet.indexOf(letter)];

  const handleClick = (e) => {
    onClick(letter);
  };
  return (
    <div onClick={handleClick} className={`letter ${status ? status : ""}`}>
      {letter}
    </div>
  );
};

export default Button;
