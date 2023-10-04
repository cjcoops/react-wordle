import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "./Input";
import PreviousGuesses from "./PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleGuess(guess) {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }

  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <Input onGuess={handleGuess} />
    </>
  );
}

export default Game;
