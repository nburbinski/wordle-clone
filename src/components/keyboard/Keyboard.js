import React from "react";
import LetterKey from "./LetterKey";
import OtherKey from "./OtherKey";

const Keyboard = ({ onEnter, onChar, onDelete }) => {
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
        <LetterKey onClick={onClick} letter="Q"></LetterKey>
        <LetterKey onClick={onClick} letter="W"></LetterKey>
        <LetterKey onClick={onClick} letter="E"></LetterKey>
        <LetterKey onClick={onClick} letter="R"></LetterKey>
        <LetterKey onClick={onClick} letter="T"></LetterKey>
        <LetterKey onClick={onClick} letter="Y"></LetterKey>
        <LetterKey onClick={onClick} letter="U"></LetterKey>
        <LetterKey onClick={onClick} letter="I"></LetterKey>
        <LetterKey onClick={onClick} letter="O"></LetterKey>
        <LetterKey onClick={onClick} letter="P"></LetterKey>
      </div>
      <div className="keyboardRow">
        <LetterKey onClick={onClick} letter="A"></LetterKey>
        <LetterKey onClick={onClick} letter="S"></LetterKey>
        <LetterKey onClick={onClick} letter="D"></LetterKey>
        <LetterKey onClick={onClick} letter="F"></LetterKey>
        <LetterKey onClick={onClick} letter="G"></LetterKey>
        <LetterKey onClick={onClick} letter="H"></LetterKey>
        <LetterKey onClick={onClick} letter="J"></LetterKey>
        <LetterKey onClick={onClick} letter="K"></LetterKey>
        <LetterKey onClick={onClick} letter="L"></LetterKey>
      </div>
      <div className="keyboardRow">
        <OtherKey onClick={onClick} type="Enter"></OtherKey>
        <LetterKey onClick={onClick} letter="Z"></LetterKey>
        <LetterKey onClick={onClick} letter="X"></LetterKey>
        <LetterKey onClick={onClick} letter="C"></LetterKey>
        <LetterKey onClick={onClick} letter="V"></LetterKey>
        <LetterKey onClick={onClick} letter="B"></LetterKey>
        <LetterKey onClick={onClick} letter="N"></LetterKey>
        <LetterKey onClick={onClick} letter="M"></LetterKey>
        <OtherKey onClick={onClick} type="Back"></OtherKey>
      </div>
    </>
  );
};

export default Keyboard;
