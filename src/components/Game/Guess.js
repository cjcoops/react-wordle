import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ guess, answer }) => {
  const checkedGuess = checkGuess(guess, answer);

  const cells = range(5).map((i) => {
    const letter = checkedGuess && checkedGuess[i].letter;
    const status = checkedGuess ? checkedGuess[i].status : "";
    return (
      <span className={"cell " + status} key={i}>
        {letter}
      </span>
    );
  });

  return <p className="guess">{cells}</p>;
};

export default Guess;
