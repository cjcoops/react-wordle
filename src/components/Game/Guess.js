import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ guess }) => {
  const cells = range(5).map((i) => {
    const letter = guess && guess[i].letter;
    const status = guess ? guess[i].status : "";
    return (
      <span className={"cell " + status} key={i}>
        {letter}
      </span>
    );
  });

  return <p className="guess">{cells}</p>;
};

export default Guess;
