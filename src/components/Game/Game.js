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

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("playing");

  function handleGuess(guess) {
    const nextGuesses = [...guesses, checkGuess(guess, answer)];
    setGuesses(nextGuesses);

    if (guess === answer.toUpperCase()) {
      setStatus("won");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
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
