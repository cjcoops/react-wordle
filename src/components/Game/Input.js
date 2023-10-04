import React from "react";
import { useState } from "react";

function Input() {
  const [guess, setGuess] = useState("");

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5,5}"
        title="Input must be exactly 5 characters long"
        required
        name="guess"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
