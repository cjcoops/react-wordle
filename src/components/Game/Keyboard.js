import React from "react";

const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

const Keyboard = ({ guesses }) => {
  const statusByLetter = guesses.flat().reduce((acc, guess) => {
    acc[guess.letter] = guess.status;
    return acc;
  }, {});

  return (
    <div className="keyboard">
      {ROWS.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.split("").map((letter) => (
            <div
              className={`key cell ${statusByLetter[letter] || ""}`}
              key={letter}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
