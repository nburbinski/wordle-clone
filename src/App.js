import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import Header from "./components/Header";
import Keyboard from "./components/keyboard/Keyboard";
import { POSSIBLEWORDS } from "./const/POSSIBLEWORDS";
import { ACTUALWORDS } from "./const/ACTUALWORDS";
import { status } from "./util/status";
import { getWordOfDay } from "./util/wordOfTheDay";
import "./index.css";
import Alert from "./components/Alert";
import HowToModal from "./components/modals/HowToModal";

const App = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [statuses, setStatuses] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [error, setError] = useState("");
  const [howToModalOpen, setHowToModalOpen] = useState(false);

  useEffect(() => {
    setCorrectWord(getWordOfDay);
  }, []);

  // Changes error state
  const errorMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError(false);
    }, 2500);
  };

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
      errorMessage("Not enough letters");
      return;
    } else if (
      !POSSIBLEWORDS.includes(currentGuess.toLowerCase()) &&
      !ACTUALWORDS.includes(currentGuess.toLowerCase())
    ) {
      errorMessage("Not in word list");
      return;
    }

    if (currentGuess.toUpperCase() === correctWord) {
      setGameOver(true);
    }

    setStatuses([...statuses, status(currentGuess, correctWord)]);

    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  return (
    <div className="wordle">
      <Header setHowToModalOpen={setHowToModalOpen}></Header>
      <Alert message={error}></Alert>
      <HowToModal
        setOpen={setHowToModalOpen}
        open={howToModalOpen}
      ></HowToModal>
      <Board
        currentGuess={currentGuess}
        guesses={guesses}
        statuses={statuses}
      ></Board>
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
