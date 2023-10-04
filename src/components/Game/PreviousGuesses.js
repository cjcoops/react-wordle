import React from "react";

const PreviousGuesses = ({ guesses }) => {
  const listItems = guesses.map((guess) => (
    <p className="guess" key={guess}>
      {guess}
    </p>
  ));

  return <div className="guess-results">{listItems}</div>;
};

export default PreviousGuesses;
