import React from 'react';

function GuessInput({
  guess,
  setGuess,
  guessList,
  setGuessList,
  isDisabled,
}) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const guessObject = {
            id: crypto.randomUUID(),
            value: guess,
          };
          const nextGuessList = [...guessList, guessObject];
          setGuessList(nextGuessList);
          setGuess('');
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
          pattern="^[A-Z]{5}$"
          disabled={isDisabled}
        />
      </form>
    </div>
  );
}

export default GuessInput;
