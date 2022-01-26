import React from "react";
import Tile from "./Tile";

const Row = ({ guess, statuses }) => {
  const splitGuess = guess ? guess.split("") : [];
  const emptyCells = Array.from(Array(5 - splitGuess.length));

  return (
    <div className="row">
      {splitGuess.map((letter, i) => (
        <Tile
          key={i}
          value={letter}
          status={statuses ? statuses[0][i] : []}
        ></Tile>
      ))}
      {emptyCells.map((_, i) => (
        <Tile key={i}> </Tile>
      ))}
    </div>
  );
};

export default Row;
