import React from "react";
import LetterKey from "./LetterKey";
import OtherKey from "./OtherKey";
import { keyboardAlphabet } from "../../util/status";

const Keyboard = ({ onEnter, onChar, onDelete, statusOfLetters }) => {
  const onClick = (value) => {
    if (value === "Enter") {
      onEnter();
    } else if (value === "Back") {
      onDelete();
    } else {
      onChar(value);
    }
  };

  return (
    <>
      <div className="keyboardRow">
        {keyboardAlphabet.slice(0, 10).map((letter) => (
          <LetterKey
            key={letter}
            letter={letter}
            onClick={onClick}
            statusOfLetters={statusOfLetters}
          ></LetterKey>
        ))}
      </div>
      <div className="keyboardRow">
        {keyboardAlphabet.slice(10, 19).map((letter) => (
          <LetterKey
            key={letter}
            letter={letter}
            onClick={onClick}
            statusOfLetters={statusOfLetters}
          ></LetterKey>
        ))}
      </div>
      <div className="keyboardRow">
        <OtherKey onClick={onClick} type="Enter"></OtherKey>
        <LetterKey
          onClick={onClick}
          letter="Z"
          statusOfLetters={statusOfLetters}
        ></LetterKey>
        {keyboardAlphabet.slice(20, 26).map((letter) => (
          <LetterKey
            key={letter}
            letter={letter}
            onClick={onClick}
            statusOfLetters={statusOfLetters}
          ></LetterKey>
        ))}
        <OtherKey onClick={onClick} type="Back"></OtherKey>
      </div>
    </>
  );
};

export default Keyboard;
