import React from "react";
import Row from "../board/Row";

const HowToModal = ({ open, setOpen }) => {
  if (open)
    return (
      <div className="modal">
        <div className="modalContent">
          <div className="modalHeader">
            <h3>HOW TO PLAY</h3>
            <button className="modalClose" onClick={() => setOpen(false)}>
              X
            </button>
          </div>
          <section>
            <p>Guess the wordle in 6 tries.</p>
            <p>
              Each guess must be a valid 5 letter word. Hit the enter button to
              submit.
            </p>
            <p>
              After each guess, the color of the tiles will change to show how
              close your guess was to the word.
            </p>
          </section>
          <section>
            <p>Examples</p>
            <Row guess={"WEARY"} statuses={[["YES", "", "", "", ""]]}></Row>

            <p>The letter W is in the word and in the correct spot.</p>
            <Row guess={"PILLS"} statuses={[["", "KINDA", "", "", ""]]}></Row>

            <p>The letter I is in the word but in the wrong spot.</p>
            <Row guess={"VAGUE"} statuses={[["", "", "", "NO", ""]]}></Row>

            <p>The letter U is not in the word in any spot.</p>
          </section>
          <section>
            <p style={{ fontWeight: "bold" }}>
              A new wordle will be available each day!
            </p>
          </section>
        </div>
      </div>
    );
  else return null;
};

export default HowToModal;
