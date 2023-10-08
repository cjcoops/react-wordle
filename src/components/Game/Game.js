import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "./Input";
import Guesses from "./Guesses";
import Banner from "./Banner";
import Keyboard from "./Keyboard";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
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

  function handleRestartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setStatus("playing");
  }

  return (
    <>
      {status !== "playing" && (
        <button
          class="restart-button"
          type="button"
          onClick={handleRestartGame}
        >
          Restart Game!
        </button>
      )}
      <Guesses guesses={guesses} answer={answer} />
      <Input onGuess={handleGuess} status={status} />
      <Banner status={status} guessesCount={guesses.length} answer={answer} />
      <Keyboard guesses={guesses} />
    </>
  );
}

export default Game;
