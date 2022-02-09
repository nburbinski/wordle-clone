import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import Header from "./components/Header";
import Keyboard from "./components/keyboard/Keyboard";
import { POSSIBLEWORDS } from "./const/POSSIBLEWORDS";
import { ACTUALWORDS } from "./const/ACTUALWORDS";
import { alphabet, status } from "./util/status";
import { getWordOfDay } from "./util/wordOfTheDay";
import "./index.css";
import Alert from "./components/Alert";
import HowToModal from "./components/modals/HowToModal";
import SettingsModal from "./components/modals/SettingsModal";

const App = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [statuses, setStatuses] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [error, setError] = useState("");
  const [howToModalOpen, setHowToModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());
  const [statusOfLetters, setStatusOfLetters] = useState(Array.from(alphabet));

  useEffect(() => {
    setCorrectWord(getWordOfDay(new Date()));
  }, []);

  // On date change
  const onDateChange = (newDate) => {
    const date = new Date(newDate) || new Date();

    if (
      date < new Date("June 19, 2021 00:00:00") ||
      date > new Date("October 20, 2027 00:00:00")
    ) {
      errorMessage("Date not within bounds");
      console.log("Date not within bounds");
      return;
    }

    setDateValue(date);
    setCorrectWord(getWordOfDay(date));

    // Reset current game state
    resetGame();
  };

  // Reset current game state
  const resetGame = () => {
    setCurrentGuess("");
    setGuesses([]);
    setStatuses([]);
    setStatusOfLetters(Array.from(alphabet));
    setGameOver(false);
  };

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

    setStatuses([
      ...statuses,
      status(currentGuess, correctWord, statusOfLetters, setStatusOfLetters),
    ]);

    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  return (
    <div className="wordle">
      <Header
        setHowToModalOpen={setHowToModalOpen}
        setSettingsModalOpen={setSettingsModalOpen}
        setStatsModalOpen={setStatsModalOpen}
      ></Header>
      <Alert message={error}></Alert>
      <HowToModal
        setOpen={setHowToModalOpen}
        open={howToModalOpen}
      ></HowToModal>
      <SettingsModal
        setOpen={setSettingsModalOpen}
        open={settingsModalOpen}
        dateValue={dateValue}
        setDateValue={setDateValue}
        onDateChange={onDateChange}
      ></SettingsModal>
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
        statusOfLetters={statusOfLetters}
      ></Keyboard>
    </div>
  );
};

export default App;
