import React from "react";
import { range } from "../../utils";

const Guess = ({ guess }) => {
  const cells = range(5).map((i) => (
    <span className="cell" key={i}>
      {guess && guess[i]}
    </span>
  ));

  return <p className="guess">{cells}</p>;
};

export default Guess;
