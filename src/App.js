import React, { useState } from "react";
import Board from "./components/board/Board";
import Header from "./components/Header";
import Keyboard from "./components/keyboard/Keyboard";
import POSSIBLEWORDS from "./const/POSSIBLEWORDS";
import ACTUALWORDS from "./const/ACTUALWORDS";
import "./index.css";

const App = () => {
  const [currentGuess, setCurrentGuess] = useState("PO");
  const [guesses, setGuesses] = useState(["Tiger"]);
  const [gameOver, setGameOver] = useState(false);
  const correctWord = "POWER";

  const onChar = (value) => {
    if (gameOver) {
      return;
    }
    if (currentGuess.length < 5) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnter = () => {
    if (currentGuess.length < 5) {
      console.log("not long enough");
      return;
    }

    if (currentGuess.toUpperCase() === correctWord) {
      setGameOver(true);
    }

    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  const checkWord = (word) => {};

  return (
    <div className="wordle">
      <Header></Header>
      <Board currentGuess={currentGuess} guesses={guesses}></Board>
      <Keyboard
        onDelete={onDelete}
        onEnter={onEnter}
        onChar={onChar}
        guesses={guesses}
      ></Keyboard>
    </div>
  );
};

export default App;
