import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "./Input";
import Guesses from "./Guesses";
import Banner from "./Banner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function getGameStatus(guesses) {
  const lastGuess = guesses[guesses.length - 1];
  if (lastGuess && lastGuess.every((letter) => letter.status === "correct")) {
    return "won";
  }
  if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    return "lost";
  }
  return "playing";
}

function Game() {
  const [guesses, setGuesses] = useState([]);

  const status = getGameStatus(guesses);

  function handleGuess(guess) {
    setGuesses((prevGuesses) => [...prevGuesses, checkGuess(guess, answer)]);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Input onGuess={handleGuess} status={status} />
      <Banner status={status} guessesCount={guesses.length} answer={answer} />
    </>
  );
}

export default Game;
