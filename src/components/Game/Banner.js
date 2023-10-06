import React from "react";

const Banner = ({ status, guessesCount, answer }) => {
  if (status === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations! </strong>
          <span>Got it in </span>
          <strong>{guessesCount} guesses</strong>.
        </p>
      </div>
    );
  }
  if (status === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
};

export default Banner;
