import React from "react";
import Guess from "./Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const Guesses = ({ guesses, answer }) => {
  const listItems = range(NUM_OF_GUESSES_ALLOWED).map((index) => (
    <Guess guess={guesses[index]} key={index} answer={answer} />
  ));

  return <div className="guess-results">{listItems}</div>;
};

export default Guesses;
