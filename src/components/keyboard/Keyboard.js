import React from "react";
import Button from "./Button";

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
        <Button onClick={onClick} letter="Q"></Button>
        <Button onClick={onClick} letter="W"></Button>
        <Button onClick={onClick} letter="E"></Button>
        <Button onClick={onClick} letter="R"></Button>
        <Button onClick={onClick} letter="T"></Button>
        <Button onClick={onClick} letter="Y"></Button>
        <Button onClick={onClick} letter="U"></Button>
        <Button onClick={onClick} letter="I"></Button>
        <Button onClick={onClick} letter="O"></Button>
        <Button onClick={onClick} letter="P"></Button>
      </div>
      <div className="keyboardRow">
        <Button onClick={onClick} letter="A"></Button>
        <Button onClick={onClick} letter="S"></Button>
        <Button onClick={onClick} letter="D"></Button>
        <Button onClick={onClick} letter="F"></Button>
        <Button onClick={onClick} letter="G"></Button>
        <Button onClick={onClick} letter="H"></Button>
        <Button onClick={onClick} letter="J"></Button>
        <Button onClick={onClick} letter="K"></Button>
        <Button onClick={onClick} letter="L"></Button>
      </div>
      <div className="keyboardRow">
        <Button onClick={onClick} letter="Enter"></Button>
        <Button onClick={onClick} letter="Z"></Button>
        <Button onClick={onClick} letter="X"></Button>
        <Button onClick={onClick} letter="C"></Button>
        <Button onClick={onClick} letter="V"></Button>
        <Button onClick={onClick} letter="B"></Button>
        <Button onClick={onClick} letter="N"></Button>
        <Button onClick={onClick} letter="M"></Button>
        <Button onClick={onClick} letter="Back"></Button>
      </div>
    </>
  );
};

export default Keyboard;
