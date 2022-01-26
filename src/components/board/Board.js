import React from "react";
import Row from "./Row";

const Board = ({ currentGuess, guesses }) => {
  const emptyRows = Array.from(Array(5 - guesses.length));

  return (
    <div className="board">
      {guesses.map((guess, i) => (
        <Row guess={guess} key={i}></Row>
      ))}

      <Row guess={currentGuess}></Row>

      {emptyRows.map((_, i) => (
        <Row key={i}></Row>
      ))}
    </div>
  );
};

export default Board;
