import React from "react";
import Button from "./Button";

const Keyboard = () => {
  return (
    <>
      <div className="keyboardRow">
        <Button letter="Q"></Button>
        <Button letter="W"></Button>
        <Button letter="E"></Button>
        <Button letter="R"></Button>
        <Button letter="T"></Button>
        <Button letter="Y"></Button>
        <Button letter="U"></Button>
        <Button letter="I"></Button>
        <Button letter="O"></Button>
        <Button letter="P"></Button>
      </div>
      <div className="keyboardRow">
        <Button letter="A"></Button>
        <Button letter="S"></Button>
        <Button letter="D"></Button>
        <Button letter="F"></Button>
        <Button letter="G"></Button>
        <Button letter="H"></Button>
        <Button letter="J"></Button>
        <Button letter="K"></Button>
        <Button letter="L"></Button>
      </div>
      <div className="keyboardRow">
        <Button letter="Enter"></Button>
        <Button letter="Z"></Button>
        <Button letter="X"></Button>
        <Button letter="C"></Button>
        <Button letter="V"></Button>
        <Button letter="B"></Button>
        <Button letter="N"></Button>
        <Button letter="M"></Button>
        <Button letter="Back"></Button>
      </div>
    </>
  );
};

export default Keyboard;
