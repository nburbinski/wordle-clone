import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

import "./index.css";

const App = () => {
  return (
    <div className="wordle">
      <Header></Header>
      <Board></Board>
      <Keyboard></Keyboard>
    </div>
  );
};

export default App;
